import express from 'express'
import products from './data/products.js';
const port=5000;

const app=express();
app.get("/",(req,res)=>{
    res.send("Api");
});

app.get("/api/products",(req,res)=>res.send(products));
app.get("/api/products/:id",(req,res)=>res.send(products.find(x=>x._id==req.params.id)));

app.listen(port,()=>console.log("Server Started"));