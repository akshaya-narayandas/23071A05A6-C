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
const exp = require("express");
const app = exp();
app.set("view engine","ejs");
app.use(exp.static("public"));
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(exp.urlencoded({extended:true}));
// app.use(exp.json());
let port = 8080;
app.listen(port,()=>{
    console.log("app is listening");
})
app.get("/",(req,res)=>{
    res.send("root main is working");
})
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find({});
    res.render("chats.ejs",{chats});

})
app.get("/new",(req,res)=>{
    let {_id} = req.params;
    res.render("form.ejs");

})
app.post("/chats/new",(req,res)=>{
    let {desc,cat,amount} = req.body;
    let c1 = new Chat({
        desc : desc,
        cat : cat,
        amount : amount,
        date : new Date()

    })
    c1.save()
    .then((res)=>{
        console.log(res);
        
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
    
    
})
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chats = await Chat.findById(id);
    res.render("edit.ejs",{chats});

})
app.patch("/chats/:id/edit",async(req,res)=>{
    let{amount} = req.body;
    let{id} = req.params;
    let chats = await Chat.findByIdAndUpdate(id,{amount:amount},{new:true});
    console.log(chats);
    res.redirect("/chats");



})
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let chats = await Chat.findByIdAndDelete(id);
    console.log(chats);
    res.redirect("/chats");
});
