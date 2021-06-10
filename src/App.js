import "./components/Pokemon.css";

import PokemonList from "./components/PokemonList";

function App() {
	return (
		<div className="poke-container">
			<div className="pokedex">
				<PokemonList />
			</div>
		</div>
	);
}

export default App;
