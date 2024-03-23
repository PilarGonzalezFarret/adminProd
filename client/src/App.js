import './App.css';
import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './views/Main.jsx';
import Details from './views/Details.jsx';
import Edit from './views/Edit.jsx';

function App() {
  //const [ state, setState ] = useState ("");
  return (
    <div className="App">
        <h1>Product Manager</h1>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>      {/* En amarillo está la ruta, parecido a como se ve en la parte de arriba del browser. Entre {} está el nombre del archivo view. */}
            <Route path="/localhost:300/:id/" element={<Details/>} />    {/* Aquí la ruta termina en :id, pero en el componente va fuera de 'la ruta', con un +id. */}
            <Route path="/api/update/:id/" element={<Edit/>} />
            <Route path="/api/delete/:id/" element={<Edit/>} />
          </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;