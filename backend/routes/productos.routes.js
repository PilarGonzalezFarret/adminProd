/* Importamos dependencia */
import express from "express";

/* Importamos los controladores */
import * as productosCtrl from "../controllers/producto.controller.js";

/* Declaramos una constante: instancia de express */
const productoRouter = express.Router();

/* Declarar las rutas en donde se van a usar las funciones: */
productoRouter.post("/api/products/new", productosCtrl.createProducto);
productoRouter.get("/api/products/get", productosCtrl.getAllProductos);
productoRouter.get("/api/products/get/:productosId", productosCtrl.getProductoById);
productoRouter.put("/api/products/update/:productosId", productosCtrl.updateProducto);
productoRouter.delete("/api/products/delete/:productosId", productosCtrl.deleteProducto);

export {productoRouter}