import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function CapturedPokemons({
	capturedPokemons,
	setCapturedPokemons,
}) {
	const handleRemove = (clicked) => {
		const filterPokemons = capturedPokemons.filter(
			(pokemon) => pokemon.name !== clicked
		);
		setCapturedPokemons(filterPokemons);
	};

	return (
		<>
			<h1>Sandra's pokemons</h1>
			<div className="captured-container">
				<ul className="card-list">
					{capturedPokemons.length === 0 ? (
						<p>No pokemons here yet :( Go catch'em all!</p>
					) : (
						capturedPokemons.map((pokemon, index) => (
							<li className="pokemon-card" key={index}>
								<>
									<AiOutlineClose
										onClick={() => handleRemove(pokemon.name)}
										className="delete-pokemon"
									/>
								</>
								<img
									className="list-img"
									src={pokemon.sprites.front_default}
									alt=""
								/>
								<p
									style={{
										fontWeight: "bold",
										textTransform: "capitalize",
										fontSize: "1.5rem",
										marginBottom: "0.5rem",
									}}
								>
									{pokemon.name}
								</p>
							</li>
						))
					)}
				</ul>
			</div>
			<Link to="/">
				<button className="back-to">Back to Pokemon</button>
			</Link>
		</>
	);
}
