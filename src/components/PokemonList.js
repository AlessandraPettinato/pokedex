import { useState } from "react";
import { Link } from "react-router-dom";
import { GiChest } from "react-icons/gi";

import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

import "./Pokemon.css";

export default function PokemonList({ pokemon, loading, setPokemon }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(16);

	const [capturedPokemons, setCapturedPokemons] = useState([]);

	const indexOfLastPokemon = currentPage * pokemonPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;

	const currentPokemons = pokemon.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
	);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const removePokemonFromList = (removedPokemon) =>
		pokemon.filter((pokemon) => pokemon !== removedPokemon);

	const capture = (pokemon) => () => {
		setCapturedPokemons([...capturedPokemons, pokemon]);
		setPokemon(removePokemonFromList(pokemon));
	};

	return (
		<div className="pokemon-list">
			<div className="header">
				<h1>Sandra's Pokedex</h1>
				<Link to="catchEmAll">
					<GiChest className="chest" />
				</Link>
			</div>
			<PokemonCard
				loading={loading}
				pokemon={currentPokemons}
				setPokemon={setPokemon}
				capture={capture}
			/>

			<Pagination
				pokemonPerPage={pokemonPerPage}
				totalPokemon={pokemon.length}
				paginate={paginate}
			/>
		</div>
	);
}
