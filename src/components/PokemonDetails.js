import { withRouter, Link } from "react-router-dom";

function PokemonDetails({ routeProps, pokemon }) {
	const foundCard = pokemon.find(
		(card) => card.id === +routeProps.match.params.id
	);

	if (!foundCard) return null;

	return (
		<>
			<h1 style={{ marginTop: "4rem" }}>Pokemon details</h1>
			<div className="details-container">
				<div className="pokemon-card-details">
					<img
						className="details-img"
						src={foundCard.sprites.front_default}
						alt=""
					/>
					<h1 className="pokemon-name">{foundCard.name}</h1>
					<p className="type">
						Type - <span>{foundCard.types[0].type.name}</span>
					</p>
					<p className="weight">
						Weight - <span>{foundCard.weight}</span>
					</p>
					<p className="height">
						Height - <span>{foundCard.height}</span>
					</p>
					<p className="ability">
						Ability - <span>{foundCard.abilities[0].ability.name}</span>
					</p>
				</div>
				<Link to="/">
					<button className="back-to">Back to Pokemon</button>
				</Link>
			</div>
		</>
	);
}

export default withRouter(PokemonDetails);
