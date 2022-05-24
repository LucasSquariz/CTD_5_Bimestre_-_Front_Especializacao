import React, { useContext } from "react";
import DataContext from "../../context/contextoFormulario"


const Detalhe = () => {
  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.

  const { state } = useContext(DataContext);  
  console.log(state.nome)
  return (    
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {state.nome}</p>
          <p>Sobrenome: {state.sobrenome}</p>
          <p>Email: {state.email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {state.nomePokemon}</p>
          <p>Tipo: {state.tipoPokemon}</p>
          <p>Elemento: {state.elementoPokemon}</p>
          <p>Altura: {state.alturaPokemon} </p>
          <p>Idade: {state.idadePokemon} </p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
