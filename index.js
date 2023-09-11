const express = require("express");
const cors = require('cors'); 
const config = require("config");
const Item = require("./models/person");

const app = express();
const mongoose = require("mongoose");
const db = config.get("mongoURI");
app.use(cors());
app.use(express.json());
const options = {
useUnifiedTopology: true,
useNewUrlParser: true,
};


mongoose
.connect(db, options)
.then(() => console.log("mongoDB connected..."))
.catch((err) => console.log(err));


// GET Fetch all person
        app.get("/api",(req, res) => {
        console.log('here')
        Item.find().then((items) => res.json(items));
        })

// GET Fetch by id
        app.get("/api/:id",async (req, res) => {
        await Item.findOne({"_id": req.params.id }).then((user)=>{
            res.json({user })

            })
            .catch((err)=>{
                res.json({ success: "No User Found!" })

            })          
        })



//POST Add A person to the DB
        app.post("/api", (req, res) => {
        const newItem = new Item({
            name: req.body.name,
        });
        newItem
            .save()
            .then((item) => res.json(item))
            .catch((err) => console.log(err));
        });



// UPDATE - update person 

        app.put("/api/:id",async(req,res)=>{
        const filter = { _id: req.params.id};
        const update = { name: req.body.name};
        await Item.findOneAndUpdate(filter, update).then((user)=>{
            res.json({success: "User Updated Successfully"  })
            })
            .catch((err)=>{
                res.json({ success: "User Update Fail" })

            })
        })


//DELETE - delete person from DB
        app.delete("/api/:id",async (req, res) => {
        var response =  await Item.deleteOne({ "_id": req.params.id})
        if(response.deletedCount)
        res.json({ success: "person deleted Successfully" })
        else
        res.json({ success: "person deletion error!" })

        });
const port = 3000 || 9000;
app.listen(port, () => console.log(`Server started on port${port}`));