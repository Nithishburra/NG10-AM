 // in nodeJS we have to import the modules with the help of require function..
 const express =require("express");
 const cors =require("cors");
 const mongodb = require("mongodb");
 const jwt = require("jwt-simple");

 let g_token = "";

 const app = express();

app.use(cors());

app.use(express.json());

const ashokIT = mongodb.MongoClient;


app.post("/login",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin123@angular-13.yffi1.mongodb.net/Miniproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("Miniproject");
            db.collection("logindetails").find({"email":req.body.email,"password":req.body.password}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                          const token = jwt.encode({"email":req.body.email,"password":req.body.password},"admin123");
                          g_token=token;
                        res.send({"login":"success","token":token})
                    }else{
                        res.send({"login":"fail"});
                    }
                }
            })
        }
    })
});

app.get("/products",(req,res)=>{
  let allHeaders = req.headers;
  if( allHeaders.token ==  g_token){
    ashokIT.connect("mongodb+srv://admin:admin123@angular-13.yffi1.mongodb.net/Miniproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("Miniproject")
            db.collection("Products2").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
             }
            })
        }
  });
}else{
    res.send({"message":"unAuthorizeduser"});
}
});

app.listen(8010,()=>{
    console.log("server listening the port number 8010");
});



