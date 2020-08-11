import React from 'react';

import Producto from './../producto/producto'
import './carrito.css'

const Carrito = ({ carrito, agregarProducto }) => {
    return (
        <div className="carrito">
            <h2>Yu carrito</h2>
            {carrito.length === 0
                ?
                <p> no hay elementos</p>
                :
                carrito.map(producto => <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />)}

        </div>
    );
}

export default Carrito;