import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del producto es requerido"],
        unique: true
    },
    precio: {
        type: Number,
        required: [true, "El precio del producto es requerido"],
    },
    descripcion: {
        type: String,
        required: true,
        minLength: [8,"La descripción debe contener al menos 8 caracteres"]
    }
},{timestamps: true}
);

const Productos = mongoose.model("productos", ProductoSchema);

export default Productos;