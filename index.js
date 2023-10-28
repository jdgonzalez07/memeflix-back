import express from "express";
import indexRouter from "./routers/indexRouter.js";

const server = express()
server.use("/api", indexRouter)

server.get("/", (req,res,next)=>{
    res.send("Estoy en servidor /")
})

server.listen(3000, ()=> {console.log("escuchando en puerto 3000")})