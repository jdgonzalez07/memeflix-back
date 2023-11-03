import "dotenv/config.js"
import express from "express";
import cors from "cors"
import indexRouter from "./routers/indexRouter.js";
import "./config/database.js"
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";


const server = express()
server.use(express.json())
server.use(cors())

server.use("/api", (req,res,next)=>{
    console.log(`Hicieron una petición a mi backend a la ruta: ${req.url} y a la hora: ${new Date().toLocaleTimeString()}`)

    next()
} ,indexRouter)


server.get("/", (req,res,next)=>{
    res.send("Estoy en servidor /")
})

server.use(notFoundHandler)
server.use(errorHandler)

server.listen(process.env["PORT"], ()=> {console.log("escuchando en puerto " + process.env["PORT"])})