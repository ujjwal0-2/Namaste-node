// database in form of npm i mongodb
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =" mongodb+srv://UjjwalSharma:itxI6bCWVSSLSGuB@cluster0.rhwnd.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

  return 'done.';
}



main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
