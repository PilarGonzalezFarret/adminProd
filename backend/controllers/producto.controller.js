import Productos from "../models/producto.model.js";

/* Create */
const createProducto = async (req, res) => {
    try{
        let data = req.body;
        let newData = await Productos.create(data);
        res.status(200).json(newData);
    }
    catch(error){
        console.log("Error " + error.message);
        res.status(400).json({
            message:"Por favor, completa los datos correctamente ."
        });
    }
};

/* Read: Create all */
const getAllProductos = async (req, res) => {
    try{
        let list = await Productos.find();
        res.status(200).json(list);
    }
    catch(error){
        console.log("Error " + error.message);
        res.status(400).json({
            message:error.message
        });
    }
};

/* Read: Create producto by id */
const getProductoById = async (req, res) => {
    try{
        let id = req.params.productosId;
        let found =  await Productos.findById(id);
        res.status(200).json(found)
    }
    catch(error){
        console.log("Error " + error.message);
        res.status(400).json({
            message:error.message
        });
    }
};

/* Update */
const updateProducto = async (req,res) => {
    try{
        let id = req.params.productosId;
        let data =  req.body;
        await Productos.findByIdAndUpdate(id,data,{runValidators: true});
        res.status(200).json()
    }
    catch(error){
        console.log("Error " + error.message);
        res.status(400).json({
            message:error.message
        });
    }
};

/* Delete */
const deleteProducto = async (req, res) => {
    try{
        let id = req.params.productosId;
        await Productos.findByIdAndDelete(id);
        res.status(200).json();
    }
    catch(error){
        console.log("Error " + error.message);
        res.status(400).json({
            message: error.message
        });
    }
};

export { createProducto, getAllProductos, getProductoById, updateProducto, deleteProducto };