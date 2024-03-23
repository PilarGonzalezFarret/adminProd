// Se importan las librerías 
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Se importan las rutas 
import * as productoRoutes from "./routes/productos.routes.js";

// Crear el servidor 
const app = express();

// Configurar servidor 
app.use(express.json());
app.use(cors());
app.use(productoRoutes.productoRouter);
app.listen(8000);

//console.log("El servidor está funcionando en el puerto 8000");

// Conectar servidor con mongoDB 
mongoose.connect("mongodb://127.0.0.1:27017/productosdb")
.then(() => console.log("Conectado correctamente a la base de datos: Puerto 8000, mi ciela."))
.catch((e) => console.log("Error ", e)); 

