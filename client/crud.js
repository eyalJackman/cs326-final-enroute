import { readFile, writeFile, access } from "fs/promises";
import { constants } from "fs";

// The file we want to store data in.
const fileName = "users.json";

async function init() {
    try {
        // Check if the file exists.
        await access(fileName, constants.R_OK | constants.W_OK);
    } catch (err) {
        // File does not exist. Create it.
        await writeFile(fileName, "{}");
    }
}

export async function createUser(name, id) {
    const user = { name, id, favorites: [] };
    try {
        const data = await readFile(fileName, "utf8");
        const users = JSON.parse(data);
        users[id] = user;
        await writeFile(fileName, JSON.stringify(users));
        return user;
    } catch (err) {
        console.error("Error writing to file: ", err);
        return undefined;
    }
}

export async function readUser(id) {
    try {
        const data = await readFile(fileName, "utf8");
        const users = JSON.parse(data);
        return users[id];
    } catch (err) {
        console.error("Error reading from file: ", err);
        return undefined;
    }
}

export async function updateUser(id, favorite) {
    try {
        const data = await readFile(fileName, "utf8");
        const users = JSON.parse(data);
        const user = users[id];
        user.favorites.push(favorite);
        await writeFile(fileName, JSON.stringify(users));
        return user;
    } catch (err) {
        console.error("Error updating file: ", err);
        return undefined;
    }
}

export async function deleteUser(id) {
    try {
        const data = await readFile(fileName, "utf8");
        const users = JSON.parse(data);
        const user = users[id];
        delete users[id];
        await writeFile(fileName, JSON.stringify(users));
        return user;
    } catch (err) {
        console.error("Error deleting from file: ", err);
        return undefined;
    }
}

init();