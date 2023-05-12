import express from "express";
import { __dirname } from "./utilis.js";
import handlebars from "express-handlebars";
import home from "./router/products.router.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/publics"))

app.engine("handlebars", handlebars.engine())

app.set("views",__dirname + "/views")
console.log(__dirname);
app.set("view engine", "handlebars")

app.use("/products",home)



app.listen(8080, () => {
    console.log("escuchando puerto")
})