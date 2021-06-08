import axios from "axios";
import { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

export default function PokemonList() {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(5);

	useEffect(() => {
		const getPokemon = async () => {
			setLoading(true);
			const res = await axios.get(
				"https://pokeapi.co/api/v2/pokemon/?limit=100"
			);
			setPokemon(res.data.results);
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
