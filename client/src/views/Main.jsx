import React, { useEffect, useState } from 'react'
import Form from '../components/Form.jsx';
import List from '../components/List.jsx';
import axios from 'axios';

const Main = () => {

    const [products, setProducts] = useState([]); //El products 
    //de esta línea es el products que está entre {} 
    //de la línea 21. 
    //El arreglo vacío es con fines de luego hacer una iteración con map.

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
        .then(res=>setProducts(res.data.products))
        .catch(err=>console.log("Error: ", err))
    }, [])
    return(
        <div>
            <Form/>
            <List products={products}/>
        </div>
    )
}

export default Main;
