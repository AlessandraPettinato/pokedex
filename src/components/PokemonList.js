import { useState } from "react";

import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

import "./Pokemon.css";

export default function PokemonList({ pokemon, loading }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(15);

	const indexOfLastPokemon = currentPage * pokemonPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;

	const currentPokemons = pokemon.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
	);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	if (loading) {
		return <h2>Loading</h2>;
	}

	return (
		<div className="pokemon-list">
			{pokemon.map((item) => (
				<PokemonCard key={item.id} name={item.name} />
			))}

			<Pagination
				pokemonPerPage={pokemonPerPage}
				pokemon={pokemon}
				currentPokemons={currentPokemons}
				paginate={paginate}
			/>
		</div>
	);
}
