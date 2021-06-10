import { withRouter } from "react-router-dom";

function PokemonDetails({ routeProps, pokemon }) {
	const foundCard = pokemon.find(
		(card) => card.id === +routeProps.match.params.id
	);

	if (!foundCard) return null;

	return (
		<div>
			<p>{foundCard.base_experience}</p>
		</div>
	);
}

export default withRouter(PokemonDetails);
