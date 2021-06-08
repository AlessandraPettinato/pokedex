import axios from "axios";
import { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";

export default function PokemonList() {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage, setPokemonPerPage] = useState(5);

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

	// const indexOfLastPokemon = currentPage * pokemonPerPage;
	// const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
	// const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

	// const getPokemon = () => {
	// 	fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
	// 		.then((res) => res.json())
	// 		.then((data) => setPokemon(data));
	// };

	// useEffect(getPokemon, []);

	return (
		<div>
			<PokemonCard loading={loading} pokemon={pokemon} />
		</div>
	);
}
