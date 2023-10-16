const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'node';
const client = new MongoClient(url);

async function getData() {
    try {
        await client.connect();
        const db = client.db(databaseName);
        const collection = db.collection('shivam');
        return collection; 
    } catch (err) {
        console.error('Error:', err);
        throw err;
    } finally {
        await client.close(); 
    }
}

module.exports = getData(); 