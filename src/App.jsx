import { useState } from "react"
import "./styles.css"

function App() {
  
  const [inputNomeCompleto, setInputNomeCompleto] = useState("");
  const [inputIdade, setInputIdade] = useState("");
  const [inputPokemon, setInputPokemon] = useState("");
  const [lista, setLista] = useState([]);

  const pessoas = {
    nomeCompleto: inputNomeCompleto,
    Idade: inputIdade,
    pokemon: inputPokemon,
  }

  const addItem = (event) => {
    event.preventDefault();
    setLista([...lista, pessoas]);
    setInputNomeCompleto("");
    setInputIdade("");
    setInputPokemon("");
  }

  return (
    <>
    <h1>Formulário</h1>
    <div>
      <form className="form">
        
        <span>Nome</span>
        <input type="text" onChange={(event) => setInputNomeCompleto( event.target.value)} value={inputNomeCompleto} />

        <span>Idade</span>
        <input type="number" onChange={(event) => setInputIdade( event.target.value)} value={inputIdade} />

        <span>Pokemon Favorito</span>
        <input type="text" onChange={(event) => setInputPokemon( event.target.value)} value={inputPokemon} />

        <button id="sucesso" onClick={addItem} >+</button>
      </form>
    </div>
    <div>
      <ul>
        {lista.map((item,indice) =>(
          <li key={indice}> {item.nomeCompleto} - {item.Idade} - {item.pokemon}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
