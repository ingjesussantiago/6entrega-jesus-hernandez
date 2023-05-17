import { Router } from "express";
import { managerProducto } from "../../productsManager.js"
import { __dirname } from "../utilis.js";


const router = Router()
const ManagerProducto = new managerProducto(__dirname + "/productos.json")

router.get("/", async (req, res) => {
        const productos = await ManagerProducto.getProduct()
        res.render("realTimeProducts",{productos})
    
})

router.post("/", async (req, res) => {
    const producto = req.body
    const nuevoProducto = await ManagerProducto.addProduct(producto)
    res.json({ message: "Prodcuto creado", producto: nuevoProducto })
})


export default router