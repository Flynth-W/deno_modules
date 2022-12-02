import {  MongoClient , GridFSBucket } from "https://deno.land/x/mongo@v0.31.1/mod.ts";





const client = new MongoClient();

await client.connect("mongodb://localhost:8011");
const db = client.database("files")


const bucket = new GridFSBucket(db);
const upstream = await bucket.openUploadStream("test.txt");
const writer = upstream.getWriter();
await writer.write(new TextEncoder().encode("Hello World! Deno to Mongo"));
await writer.close();
