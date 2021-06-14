import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./components/Pokemon.css";

import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import { getPokemon } from "./components/services/pokemon";
import CapturedPokemons from "./components/CapturedPokemons";

function App() {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(false);
	const [capturedPokemons, setCapturedPokemons] = useState([]);

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

	const loadPokemonDetails = async (data) => {
		let _pokemon = await Promise.all(
			data.map(async (pokemon) => {
				let pokemonDetails = await getPokemon(pokemon);
				return pokemonDetails;
			})
		);
		setPokemon(_pokemon);
	};

	const removePokemonFromList = (removedPokemon) =>
		pokemon.filter((pokemon) => pokemon !== removedPokemon);

	const capture = (pokemon) => () => {
		setCapturedPokemons([...capturedPokemons, pokemon]);
		setPokemon(removePokemonFromList(pokemon));
	};

	return (
		<div className="poke-container">
			<div className="pokedex">
				<Router>
					<Route
						path="/pokemon/:id"
						render={(routeProps) => (
							<PokemonDetails routeProps={routeProps} pokemon={pokemon} />
						)}
					/>
					<Route
						path="/catchEmAll"
						render={() => (
							<CapturedPokemons
								capturedPokemons={capturedPokemons}
								setCapturedPokemons={setCapturedPokemons}
							/>
						)}
					/>

					<Route
						exact
						path="/"
						render={() => (
							<PokemonList
								pokemon={pokemon}
								loading={loading}
								capture={capture}
								capturedPokemons={capturedPokemons}
								showAllPokemons={showAllPokemons}
							/>
						)}
					/>
				</Router>
			</div>
		</div>
	);
}

export default App;
