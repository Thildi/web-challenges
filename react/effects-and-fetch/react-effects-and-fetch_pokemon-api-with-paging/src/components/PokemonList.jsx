import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  function loadNextPage() {
    setPage((prevpage) => prevpage + 1);
  }

  function loadPreviousPage() {
    if (page === 1) {
      return;
    } else {
      setPage((prevpage) => prevpage - 1);
    }
  }

  return (
    <main>
      <button type="button" onClick={() => loadPreviousPage()}>
        Previous Page
      </button>
      <button type="button" onClick={() => loadNextPage()}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
