const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


const app = express();

app.use(express.json());

app.use(cors());


const ashokIT = mongodb.MongoClient;


app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin123@angular-13.yffi1.mongodb.net/ngrx-Angular?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ngrx-Angular");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
});


app.listen(8070,()=>{
    console.log("server listening the port no.8070");
});
