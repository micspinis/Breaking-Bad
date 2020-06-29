import React from 'react';
import styled from '@emotion/styled';

// Styled components
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
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
  // Otra forma de resolver las promisses es usando la forma "async await" con esto nos evitamos escribir "then"
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    console.log(frase[0]); //[0] Para ir un nivel adentro del objeto y consumir solo la frase.
  }
  

  return (
    <Contenedor>
      <Boton
       onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
