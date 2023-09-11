const express = require("express");
const cors = require('cors'); 
const config = require("config");
const Item = require("./models/person");

const app = express();
const mongoose = require("mongoose");
const db = config.get("mongoURI");
const util = require('node:util');
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
            if(!util.isString(req.body.name)){
                res.status(404).json({Failure: "Only String is allowed"})
            }else{
        const newItem = new Item({
            name: req.body.name,
        });
        newItem
            .save()
            .then((item) => res.json(item))
            .catch((err) => res.status(404).json({Failure: "Please provide a valid request Body"} ));
    }
        });
    



// UPDATE - update person 

        app.put("/api/:id",async(req,res)=>{
        const filter = { _id: req.params.id};
        const update = { name: req.body.name};
        if(!util.isString(req.body.name)){
            res.status(404).json({Failure: "Only String is allowed"})
        }else{
        await Item.findOneAndUpdate(filter, update).then((user)=>{
            res.json({Success: "User Updated Successfully"  })
            })
            .catch((err)=>{
                res.status(404).json({ Failure: "User Update Fail" })

            })
        }
        })


//DELETE - delete person from DB
        app.delete("/api/:id",async (req, res) => {
        var response =  await Item.deleteOne({ "_id": req.params.id})
        if(response.deletedCount)
        res.json({ success: "person deleted Successfully" })
        else
        res.status(404).json({ Failure: "person deletion error!" })

        });
const port = 3000 || 9000;
app.listen(port, () => console.log(`Server started on port${port}`));