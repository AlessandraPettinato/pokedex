import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage, setPokemonPerPage] = useState(5);

	useEffect(() => {
		const getPokemon = async () => {
			setLoading(true);
			const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
			setPokemon(res.data);
			setLoading(false);
		};
		getPokemon();
	}, []);

	return (
		<div className="App">
			<p>Hello from App</p>
		</div>
	);
}

export default App;
