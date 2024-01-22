const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required: true,
    },
    usertype: {
        type:String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);//username,password

module.exports = mongoose.model("User",userSchema);

