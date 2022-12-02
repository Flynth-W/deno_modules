import {  MongoClient , GridFSBucket } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const client = new MongoClient();

await client.connect("mongodb://localhost:8011");
const db = client.database("files")


const bucket = new GridFSBucket(db);
const list = await bucket.find({ filename: "test.txt" }).toArray()
const id = list[0]._id

console.log(list ,id)

//const text = new Response(await bucket.openDownloadStream(id))
//const buff = await text.arrayBuffer()
//const arr = new Uint8Array(buff)
//Deno.writeFile("data.txt",arr)
