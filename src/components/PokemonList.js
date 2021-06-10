import { useState } from "react";
import { GiChest } from "react-icons/gi";

import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

import "./Pokemon.css";

export default function PokemonList({ pokemon, loading }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(16);

	const indexOfLastPokemon = currentPage * pokemonPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;

	const currentPokemons = pokemon.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
	);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="pokemon-list">
			<div className="header">
				<h1>Sandra's Pokedex</h1>

				<GiChest className="chest" />
			</div>
			<PokemonCard loading={loading} pokemon={currentPokemons} />

			<Pagination
				pokemonPerPage={pokemonPerPage}
				totalPokemon={pokemon.length}
				paginate={paginate}
			/>
		</div>
	);
}
