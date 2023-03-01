import {useEffect, useState} from 'react';
import Pokemon from './components/pokemon.jsx';
import './App.css'

function App(){

  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=807';

  useEffect( () => {

    const fetchPokemon = async () => {
      const data = await fetch(url);
      const json = await data.json();

      setCount(json.count);
      setPokemon(json.results);

    }

    fetchPokemon()
      .catch(console.error);

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
