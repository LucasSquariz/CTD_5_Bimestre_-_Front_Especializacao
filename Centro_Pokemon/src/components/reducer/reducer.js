const Reducer = (state, action) => {
    switch (action.type) {
        case 'nome':
            return {
                ...state,
                nome: action.payload.nome
            }
        case 'sobrenome':
            return {
                ...state,
                sobrenome: action.payload.sobrenome
            }
        case 'email':
            return {
                ...state,
                email: action.payload.email
            }
        case 'nomePokemon':
            return {
                ...state,
                nomePokemon: action.payload.nomePokemon
            }
        case 'tipoPokemon':
            return {
                ...state,
                tipoPokemon: action.payload.tipoPokemon
            }
        case 'elementoPokemon':
            return {
                ...state,
                elementoPokemon: action.payload.elementoPokemon
            }
        case 'alturaPokemon':
            return {
                ...state,
                alturaPokemon: action.payload.alturaPokemon
            }
        case 'idadePokemon':
            return {
                ...state,
                idadePokemon: action.payload.idadePokemon
            }

    }
}

export default Reducer;