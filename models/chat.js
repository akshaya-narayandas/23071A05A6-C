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
const chatSchema = mongoose.Schema({
    desc : {
        type :  String,
        maxLength:50,
        required :true,
    },
    cat : {
        type:String,
        maxLength:50,
        required:true
    },
    amount : {
        type : Number,
    },
    date : {
        type : Date
    }

});
const Chat = mongoose.model("Chat",chatSchema);
module.exports = Chat;
