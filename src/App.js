import React, { useState } from 'react';
import Frase from './components/Frase';
import styled from '@emotion/styled';

// Styled components
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 5rem; */
  padding-top: 15rem;
  flex-direction: column;
`;



const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem; 
  font-size: 2rem;
  border: 2px solid black;
`;


function App() {

  // state de frases
  // Recordar que usamos el state por que si bien ya teniamos el dato en el proyecto, usandon el hook useState se realiza en automatico todo el proceso de guardar, mostrar, recargar y reemplazar.
  const [ frase, guardarFrase ] = useState({});

  // Otra forma de resolver las promisses es usando la forma "async await" con esto nos evitamos escribir "then"
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]); //[0] Para ir un nivel adentro del objeto y consumir solo la frase.
  }
  

  return (
    <Contenedor>
        <Frase 
          frase={frase}
        />
        <Boton
        onClick={consultarAPI}
        >
          Obtener Frase
        </Boton>
    </Contenedor>
  );
}

export default App;
