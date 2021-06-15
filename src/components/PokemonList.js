import { useState } from "react";
import { Link } from "react-router-dom";
import { GiChest } from "react-icons/gi";

import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

import "./Pokemon.css";

export default function PokemonList({
	pokemon,
	loading,
	capture,
	capturedPokemons,
	showAllPokemons,
}) {
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
		<>
			<div className="header">
				<h1>Pokedex</h1>
				<Link to="catchEmAll">
					<GiChest className="chest" />
				</Link>
			</div>
			<figcaption className="chest-caption">Caught Pokemons</figcaption>
			<>
				{capturedPokemons.length > 0 ? (
					<button className="show-all-pokemons" onClick={showAllPokemons}>
						Show all Pokemons
					</button>
				) : null}
			</>
			<div className="pokemon-list">
				<PokemonCard
					loading={loading}
					pokemon={currentPokemons}
					capture={capture}
					key={pokemon.id}
				/>
			</div>
			<Pagination
				pokemonPerPage={pokemonPerPage}
				totalPokemon={pokemon.length}
				paginate={paginate}
			/>
		</>
	);
}
