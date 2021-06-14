import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function CapturedPokemons({ capturedPokemons }) {
	return (
		<>
			<div className="captured-container">
				<h1 className="captured-pokemons">Sandra's pokemons</h1>

				<ul className="card-list">
					{capturedPokemons.length === 0
						? ""
						: capturedPokemons.map((pokemon, index) => (
								<li className="pokemon-card" key={index}>
									<>
										<AiOutlineClose className="delete-pokemon" />
									</>
									<img
										className="list-img"
										src={pokemon.sprites.front_default}
										alt=""
									/>
									<p
										style={{ fontWeight: "bold", textTransform: "capitalize" }}
									>
										{pokemon.name}
									</p>
									<Link to={`/pokemon/${pokemon.id}`}>
										<button className="show-details">Show details</button>
									</Link>
								</li>
						  ))}
				</ul>
			</div>
			<Link to="/">
				<button className="back-to">Back to Pokemon</button>
			</Link>
		</>
	);
}
