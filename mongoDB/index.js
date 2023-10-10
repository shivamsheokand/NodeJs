const {MongoClient} = require('mongodb'); //modren js 
// const MongoClient = require('mongodb').MongoClient; // old js

// dataBase
const dataBase = 'shivam';

// set path for mongodb

const url = 'mongodb://localhost:27017/shivam';

const client = new MongoClient(url);

async function getData(){
    let result= await client.connect();
    let db = result.db(dataBase);
    let collections =db.collections('data');
    console.log((await collections).find({}),Array());
}

console.log(getData());