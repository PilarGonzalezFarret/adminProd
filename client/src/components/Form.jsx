import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const navigate = useNavigate();
    const onSubmitHandlerForm = (e) => {   //aquí se declara la función que maneja eventos onSubmit, como el botón de más abajo.
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/products/new/", {nombre, precio, descripcion})
        .then((res)=> {                        //Después de .then viene lo que ocurre cuando todo sale bien. 
            console.log("Response: ", res)     //Se imprime la respuesta de lo que se acaba de ingresar. El servidor me lo devuelve en forma de respuesta.
            const id = res.data.product._id;   //Se declara variable id, para ser usada en la siguiente línea. _id está dentro de product, que está dentro de data, que está dentro de res. Eso se ve en la consola del browser. 
            navigate('/products/'+id)          //.then, vamos a esa ruta.
            })                                       

        .catch((err)=> console.log("Error: ", err));
    };   

    return (
        <div>
            <div>
                <form onSubmit={onSubmitHandlerForm} >   {/* Al establecer onSubmit={onSubmitHandlerForm}, se está indicando que onSubmitHandlerForm es la función que se ejecutará cuando el formulario se envíe */}  
                    <div className="formGroup">
                        <label htmlFor="nombre">Nombre: </label>
                        <input onChange={(e) => setNombre (e.target.value) } type="text" id="nombre"/>
                    </div>
                    {(nombre.length < 2 && nombre !== "") 
                    ? <p className = 'littleText'>Title must be at least 2 character</p> 
                    : null}

                    <div className="formGroup">
                        <label htmlFor="precio">Precio: </label>
                        <input onChange={(e) => {
                            const inputPrecio = Number(e.target.value);
                            setPrecio(inputPrecio > 0 ? inputPrecio : 0);
                        }}
                        type="number" id="precio" min="0"
                        />
                    </div>
                    {precio === 0 && <p className='littleText'>Price must be greater than zero</p>}

                    
                    <div className="formGroup">
                        <label htmlFor="descripcion">Descripción: </label>
                        <input onChange={(e) => setDescripcion (e.target.value) } type="text" id="descripcion"/>
                    </div>
                        {(descripcion.length < 5 && descripcion !== "") 
                        ? <p className = 'littleText'>Description must be at least 5 character</p> 
                        : null}


                            <button type="submit" >   {/* Este botón "Create" activa la función onSubmitHandlerForm, porque la función sirve para manejar el evento onSubmit, y el botón tiene el type=submit. */}
                                Crear
                            </button>       


                </form>
            </div>
            <br />
        </div>
    )
}

export default Form;