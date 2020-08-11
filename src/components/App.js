import React, { useState } from 'react';

import Header from './header/Header'
import Footer from './footer/Footer'
import Producto from './producto/producto'
import Carrito from './carrito/carrito'


const App = () => {

  //Listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'camisa', precio: 50 },
    { id: 2, nombre: 'falda', precio: 40 },
    { id: 3, nombre: 'zapatos', precio: 30 },
    { id: 4, nombre: 'corbata', precio: 20 }
  ])

  //State para un carrito de compras
  const [carrito, agregarProducto] = useState([])

  //Obtener fecha
  const fecha = new Date().getFullYear()
  return (
    <>
      <Header titulo='tienda virtual' numero={20} />


      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          productos={productos}
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto} />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto} />


      <Footer fecha={fecha} />
    </>
  );

}

export default App;
