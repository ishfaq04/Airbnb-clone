const mongoose = require("mongoose");

const initData = require("./data.js");
const Listing = require("../models/listing.js");


// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl =  process.env.ATLASDB_URL;

main()
    .then(()=>{
        console.log("Connected to DB")
}
).catch((err)=>{console.log(err)});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner:"655d087f2d61d75910423893",}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");

}

initDB();