import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = props => {
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(1);
    const [descripcion, setDescripcion] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/' + id)
            .then(res => {
                console.log(res.data);
                setNombre(res.data.product.nombre);
                setPrecio(res.data.product.precio);
                setDescripcion(res.data.product.descripcion);
            })
    }, [id])
    const updateExistingProduct = e => {
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/products/update/' + id, {
            nombre,
            precio,
            descripcion
        })
            .then(res => navigate('/products/'+id));
    }

    const deleteAnExistingProduct = e => {
        e.preventDefault();
        axios.delete('http://127.0.0.1:8000/api/products/delete/' + id, {
            nombre,
            precio,
            descripcion
        })
            .then(res => navigate('/'));
    }
    return (
        <div>
            <h2>Update the product</h2>
            <form onSubmit={updateExistingProduct}>
                <div>
                    <label>Nombre</label><br />
                    <input type="text" 
                    name="nombre" 
                    value={nombre} 
                    onChange={(e) => { setNombre(e.target.value) }} 
                    placeholder= { nombre }/>
                </div> 
                <p>
                    <label>Precio</label><br />
                    <input type="number" 
                    name="precio"
                    value={precio} 
                    onChange={(e) => { setPrecio(e.target.value) }} />
                </p>
                <p>
                    <label>Descripción</label><br />
                    <input type="text" 
                    name="descripcion"
                    value={descripcion} 
                    onChange={(e) => { setDescripcion(e.target.value) }} />
                </p>
                
                    <button type="submit" >Editar</button>
                
                    <button type='button' onClick={deleteAnExistingProduct}>Delete</button>
                
                <Link to='/'>
                    <p>Volver al home</p>
                </Link>
            </form>
        </div>
    )
}

export default Edit;