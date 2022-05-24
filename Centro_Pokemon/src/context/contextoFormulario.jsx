// Aqui devemos criar nosso contexto e nosso provider.
import { createContext, useReducer } from "react";
import Reducer from "../components/reducer/reducer";

/**
 * Estado inicial do contexto
 */
const initialState = {
    nome: "",
    sobrenome: "",
    email: "",
    nomePokemon: "",
    tipoPokemon: "",
    elementoPokemon: "",
    alturaPokemon: "",
    idadePokemon: ""
}


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)    

    /**
    * Função para alterar os dados do contexto.
    * @param {object} - novoDado 
    * @returns void
    */
    const alterarDados = (novoDado) => {
        dispatch(novoDado)
    }

    return (

        <DataContext.Provider
            value={{ state, alterarDados}}>
            {children}
        </DataContext.Provider>
    )
}

/**
 * Contexto da aplicação. Responsável por gerenciar os estados dos campos do formulário 
 */
const DataContext = createContext(ContextProvider);
export default DataContext;


