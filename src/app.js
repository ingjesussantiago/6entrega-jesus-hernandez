import express from "express";
import { __dirname } from "./utilis.js";
import handlesbar from "express-handlebars";
import home from "./router/home.router.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/publics"))

app.engine("handlesbar",handlesbar.engine())

app.set("views",__dirname + "/views")
app.set("view engine", "handlesbars")


app.get("/",(req,res)=>{
    res.send("desde app")
})
app.get("/home",(req,res)=>{
    res.send("desde router")
})




app.listen(8080, () => {
    console.log("escuchando puerto")
})