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
    async createUser(name, password){
        const res = await this.collection_users.insertOne({ name, password});
        return res;
    }
    //read a user
    // async readUser(id){
    //     const res = await this.collection_users.findOne({ _id: id });
    // }
    // // update user name
    // async updateUserName(id, name){
    //     const res = await this.collection_users.updateOne(
    //         {_id: id }, {$set: {name: name}}
    //     );
    //     return res;
    // }
    // // update user email
    // async updateUserEmail(id, email){
    //     const res = await this.collection_users.updateOne(
    //         {_id: id }, {$set: {email: email}}
    //     );
    //     return res;
    // }
    // // update user password
    // async updateUserPassword(id, password){
    //     const res = await this.collection_users.updateOne(
    //         {_id: id }, {$set: {password: password}}
    //     );
    //     return res;
    // }
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