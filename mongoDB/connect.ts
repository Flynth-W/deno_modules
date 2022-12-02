import {  MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const client = new MongoClient();

// Connecting to a Local Database
await client.connect("mongodb://localhost:8011");
// defined dbs
const db = client.database("user")
// define collection
const user = db.collection("profile")

// consultas 
const resp = await user.findOne({nick:3})
console.log(resp)


