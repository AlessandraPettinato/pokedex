import axios from "axios";
import { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

import { getPokemon } from "./services/pokemon";

export default function PokemonList() {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(10);

	const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

	useEffect(() => {
		const getPokemon = async () => {
			setLoading(true);
			const res = await axios.get(url);
			setPokemon(res.data.results);
			await loadPokemonDetails(res.data.results);
			setLoading(false);
		};
		getPokemon();
	}, []);

	const indexOfLastPokemon = currentPage * pokemonPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
	const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const loadPokemonDetails = async (data) => {
		let _pokemon = await Promise.all(
			data.map(async (pokemon) => {
				let pokemonDetails = await getPokemon(pokemon);
				return pokemonDetails;
			})
		);
		setPokemon(_pokemon);
	};

	return (
		<div>
			<PokemonCard loading={loading} pokemon={currentPokemon} />
			<Pagination
				pokemonPerPage={pokemonPerPage}
				totalPokemon={pokemon.length}
				paginate={paginate}
			/>
		</div>
	);
}
