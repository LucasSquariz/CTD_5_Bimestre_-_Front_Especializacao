import React, {useState, useContext} from "react";
import DataContext from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.
  const {state, alterarDados} = useContext(DataContext)
  
  // Além disso, usaremos um estado local para lidar com o estado da input.
  const [campo, setCampo] = useState(state)
  
  const onChange = (e) => {
    setCampo(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();
    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }    
    alterarDados({
      type: name,
      payload: {
        [name]: campo
      }
    })    
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={campo}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
