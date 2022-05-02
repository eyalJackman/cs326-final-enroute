import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';
//export class db
//read, update, fetch, fetch with parameters functions

export class Database{
    constructor(dburl){
        this.dburl = dburl;
    }
    async connect() {
        this.client = await MongoClient.connect(this.dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        });
        this.db = this.client.db('enroute');
        await this.init();
    }
    async init(){
        this.collection_users = this.db.collection('users');
        this.collection_destinations = this.db.collection('destinations');
    }
    async close(){
        this.client.close();
    }
    //add a new user
    async createUser(id, password, name, email){
        const res = await this.collection_users.insertOne({_id: id, password, name, email});
        return res;
    }
    //read a user
    async readUser(id){
        const res = await this.collection_users.findOne({_id: id});
    }
    // update user name
    async updateUserName(id, name){
        const res = await this.collection_users.updateOne(
            {_id: id }, {$set: {name}}
        );
        return res;
    }
    // update user email
    async updateUserEmail(id, email){
        const res = await this.collection_users.updateOne(
            {_id: id }, {$set: {email}}
        );
        return res;
    }
    // update user password
    async updateUserName(id, password){
        const res = await this.collection_users.updateOne(
            {_id: id }, {$set: {password}}
        );
        return res;
    }
    // delete a user
    async deleteUser(id){
        const res = await this.collection_users.deleteOne({_id: id});
        return res;
    }
    // read all users
    async readAllUsers(){
        const res = await this.collection_users.find({}).toArray();
        return res;
    }
    

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