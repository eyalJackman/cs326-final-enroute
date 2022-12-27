import "dotenv/config";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
//export class db
//read, update, fetch, fetch with parameters functions

export class Database {
    constructor(dburl) {
        this.dburl = dburl;
    }
    async connect() {
        this.client = await MongoClient.connect(this.dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        });
        this.db = this.client.db("enroute");
        await this.init();
    }
    async init() {
        this.collection_users = this.db.collection("users");
        this.collection_destinations = this.db.collection("destinations");
        this.collection_filters = this.db.collection("filters");
    }
    async close() {
            this.client.close();
        }
        //add a new user
    async createUser(
            username,
            password,
            fullname,
            email,
            phonenumber,
            favorites
        ) {
            const res = await this.collection_users.insertOne({
                username,
                password,
                fullname,
                email,
                phonenumber,
                favorites,
            });
            return res;
        }
        //read a user
    async findUser(username, password) {
            const res = await this.collection_users
                .find({ username, password })
                .toArray();
            return res;
        }
        //save filter
    async saveFilter(region, season, weather, vacationType) {
        const res = await this.collection_filters.insertOne({
            region,
            season,
            weather,
            vacationType,
        });
        return res;
    }

    async getResults(region, season, weather, vacation_type) {
        const arr = [];
        const test = await this.collection_destinations
            .find({
                region,
                season,
                weather,
                vacation_type,
            })
            .toArray();
        return test;
    }

    async addToFavorites(username, favorite) {
        const res = await this.collection_users.updateOne({ username: username }, { $push: { favorites: favorite } });
        console.log(res);
        return res;
    }

    async getFavoriteArray(username) {
        const res = await this.collection_users.find({ username }).toArray();
        return res;
    }

    async getFavoriteDestination(name) {
            const res = await this.collection_destinations.find({ name }).toArray();
            return res;
        }
        // // update user name
    async updateUserName(userid, name) {
            const res = await this.collection_users.update({ username: userid }, { $set: { username: name } });
            return res;
        }
        // update user email
    async updateUserEmail(userid, email) {
            const res = await this.collection_users.update({ username: userid }, { $set: { email: email } });
            return res;
        }
        // update user password
    async updateUserPassword(userid, password) {
            const res = await this.collection_users.update({ username: userid }, { $set: { password: password } });
            return res;
        }
        // // delete a user
        // async deleteUser(id){
        //     const res = await this.collection_users.deleteOne({_id: id});
        //     return res;
        // }
        // // read all users
        // async readAllUsers(){
        //     const res = await this.collection_users.find({}).toArray();
        //     return res;
        // }
        // //add destination entires
        // async createDestination(loc, img, des, region, weather, season, duration, activites){
        //     const res = await this.collection_destinations.insertOne({location: loc, image: img, description: des, region: region, weather: weather, season: season, duration: duration, activites: activites});
        //     return res;
        // }
        // //find destination
        // async findDestination(loc){
        //     const res = await this.collection_destinations.findOne({location:loc});
        //     return res;
        // }
        // // delete a destination
        // async deleteDestination(loc){
        //     const res = await this.collection_destinations.deleteOne({location: loc});
        //     return res;
        // }
        // // add an activity to destination
        // async addActivity(loc, new_act){
        //     const res = await this.collection_destinations.updateOne(
        //         {loc: loc},
        //         {$push: {activites: new_act}}
        //         );
        //         return res;
        // }
        // //remove an activity from destination
        // async removeActivity(loc, act){
        //     const res = await this.collection_destinations.updateOne({loc: loc}, {$pull: {activites: act}});
        //     return res;
        // }
        // // read all destinations
        // async readAllDestinations(){
        //     const res = await this.collection_destinations.find({}).toArray();
        //     return res;
        // }
        // //add to favorites
        // async addToFavorites(id, loc){
        //     const res = await this.collection_users.updateOne(
        //         {_id: id},
        //         {$push: {favorites: loc}}
        //     );
        //     return res;
        // }
        // //find favorties
        // async findFavorites(id){
        //     const res = await this.collection_users.findOne({_id: id});
        //     return res.favorites;
        // }
        // //fetch search results
        // async search(region, weather, season, duration){
        //     const res = await this.collection_destinations.find({region: region, weather: weather, season: season, duration: duration}).toArray();
        //     return res;
        // }
        // // fetch updated results based on activites
        // async activitesSearch(region, weather, season, duration, act){
        //     const res = await this.collection_destinations.find({region: region, weather: weather, season: season, duration: duration}).toArray();
        //     for(let i = 0; 0 < res.length; i++){
        //         for(let j = 0; j < act.length; j++){
        //             if(!res[i].activites.includes(act[j])){
        //                 res.remove(res[i]);
        //             }
        //         }
        //     }
        //     return res;
        // }
        //add to favorites method, will add the destination name to the users favorites table;
        //fetch favorites method, will fetch the information of the destinations based
        // on the list of favorites in the partivular user's table
        //login method, will check whether the user exists in the users table,
        //returns true or false (saved in a global variable 'login')
        //signup method, adds the users email and password to the users table in the database

    //fetch search results method, "select * where region = region, season = season,
    //weather = weather, vacationtype = vacationtype from destinations table",
    //returns a list of objects with more information such as description, picture...
}