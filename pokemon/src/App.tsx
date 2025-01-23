import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {Pokemon, Detail} from './interface'
import {PokemonCollection} from './Components/PokemonCollection'
interface Pokemons{
  name: string;
  url: string;
}
function App() {
  const [nextUrl, setNextUrl] = useState<string>('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setLoading] = useState<boolean>(false);
  const [viewDetail, setDetail] = useState<Detail>({
    id: 0,
    isOpen: false,
  });
  useEffect(() =>{
    setLoading(true);
    const getPokemon = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
      setNextUrl(res.data.next);
      const pokemonDetails = await Promise.all(
        res.data.results.map(async (pokemon: Pokemons) => {
          const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          return poke.data;
        })
      );
      setPokemons(pokemonDetails);
    };
    getPokemon();
    setLoading(false);
  }, []);

  const LoadMore = async () => {
    setLoading(true);
    const res = await axios.get(nextUrl);
    setNextUrl(res.data.next);

    const pokemonDetails : Pokemon[]= await Promise.all(
      res.data.results.map(async (pokemon: Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        return poke.data;
      })
    );
    setPokemons([...pokemons, ...pokemonDetails]);
    setLoading(false);
  }
  return (
    <div className="App">
      <header className="pokemon-header">POKEMON</header>
      <PokemonCollection
          pokemons = {pokemons}
          viewDetail={viewDetail}
          setDetail={setDetail}
      />
      <div className="btn">
        <button onClick={LoadMore}>{isLoading? 'Loading ...': 'Load More'}</button>
      </div>
    </div>
  );
}

export default App;
