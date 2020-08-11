import React from 'react';

const Header = ({ titulo, numero }) => {

    console.log(titulo, numero)

    return (
        <header>
            <h1 className="Header">{titulo} {numero}</h1>
        </header>

    )
}


export default Header;