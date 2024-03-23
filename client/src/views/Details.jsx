import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = () => {

    const [ product, setProduct ] = useState ({});
    const {id} = useParams();

    useEffect(() => {
        getProductoById();
    }, [id]);

    const getProductoById = async () => {
        try{ 
            let res = await axios.get ("http://127.0.0.1:8000/api/products/get/:productosId");
            setProduct(res.data.product);
        } catch (err) 
            { console.log(err)}
    }

    return(
        <div>
            <h1> Your product detail: </h1>
            {product && <p> Nombre: { product.nombre } </p>}
            {product && <p> Precio: { product.precio } </p>}
            {product && <p> Descripcion: { product.descripcion } </p>}

                
            <Link to={'/api/products/update/:productosId'}>
                <p>Edita este producto</p>
            </Link>

            <Link to='/'>
                <p>Volver al home</p>
            </Link>
        </div>
    )
}

export default Details;