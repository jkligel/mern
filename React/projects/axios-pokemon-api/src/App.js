import {useEffect, useState} from 'react';
import Pokemon from './components/pokemon.jsx';
import axios from 'axios';
import './App.css'

function App(){

  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=807';

  useEffect( () => {

    axios.get(url)
      .then(response => {
        setCount(response.data.count);
        setPokemon(response.data.results);
      })

  }, [] );

  return(
    <div className='App'>
      <h1>807 Pokemon Shown</h1>
      <h2>({count} in total)</h2>
      <button>Fetch Pokemon</button>
      <Pokemon pokemon={pokemon} />
    </div>
  )
}

export default App;
