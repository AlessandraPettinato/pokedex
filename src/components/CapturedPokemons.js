import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

export default function CapturedPokemons({ capturedPokemons }) {
	return (
		<div>
			<h1>Here's my captured Pokemonssss</h1>

			<ul className="card-list">
				{capturedPokemons.length === 0
					? ""
					: capturedPokemons.map((pokemon, index) => (
							<li className="pokemon-card" key={index}>
								<img
									className="list-img"
									src={pokemon.sprites.front_default}
									alt=""
								/>
								<>
									<CgPokemon className="empty-pokeball" />
								</>
								<p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
									{pokemon.name}
								</p>
								<Link to={`/pokemon/${pokemon.id}`}>
									<button>Show details</button>
								</Link>
							</li>
					  ))}
			</ul>
		</div>
	);
}
