import React from 'react';
import styled from '@emotion/styled';


// Styled component
const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    /* Creando media query */
    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    /* Sintaxis tipo sas para dar stylo a los hijos */
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        /* & hace referencia al elemento que es el padre */
        /* Esto es para crear un pseudo elemento Comillas */
        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }

    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.1rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({ frase }) => {
    return ( 
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author} </p>
        </ContenedorFrase> 
     );
}
 
export default Frase;