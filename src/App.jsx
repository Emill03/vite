import React, { useState, useEffect } from 'react';
import ProductosTable from './ProductosTable';
import productosData from './productos.json';


function App() {
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    setProductos(productosData);
  }, []);

  return (
    <div className="App">
      <h1>Lista de Productos</h1>
      <ProductosTable productos={productos} />
    </div>
  );
}

export default App;

