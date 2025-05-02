const mongoose = require('mongoose');
main().then((res)=>{
    console.log("connection succeful");
})
.catch((err)=>{
    console.log("connectipon unsceeful");
})

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/expensestracking');
}
const Chat = require("./models/chat.js");
Chat.insertMany([
    {
        desc : "The amount is transfered to ocean category",
        cat : "ocean",
        amount : 10000,
        date : new Date(),
    },
    {
        desc : "The amount is sent to drugs category",
        cat : "drugs",
        amount : "1057868 ",
        date : new Date(),
    },
    {
        desc : "The amount is sent to health ctaegory",
        cat : "health",
        amount : 3500000,
        date : new Date(),
    },
    {
        desc : "The amount is sent to diaray",
        cat : "diary",
        amount  : " 900000",
        date : new Date(),
    },
    {
        desc : "The amount is sent to miltary",
        cat : "nithya",
        amount: 750000,
        date : new Date(),
    },

]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
Chat.find({})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})