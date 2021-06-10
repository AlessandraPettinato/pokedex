import { BrowserRouter as Router, Route } from "react-router-dom";

import "./components/Pokemon.css";

import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

function App({ pokemon }) {
	return (
		<div className="poke-container">
			<div className="pokedex">
				<Router>
					<Route
						path="/:name"
						render={(routeProps) => (
							<PokemonDetails routeProps={routeProps} pokemon={pokemon} />
						)}
					/>
					<Route exact path="/" component={PokemonList} />
				</Router>
			</div>
		</div>
	);
}

export default App;
