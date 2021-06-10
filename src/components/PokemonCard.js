import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon, loading }) {
	if (loading) {
		return <h2>Loading</h2>;
	}

	return (
		<div>
			<ul className="card-list">
				{pokemon.map((pokemon, index) => (
					<li className="pokemon-card" key={index}>
						<img
							className="list-img"
							src={pokemon.sprites.front_default}
							alt=""
						/>
						<p>{pokemon.name}</p>
						<Link to={`/pokemon/${pokemon.id}`}>
							<button>Show details</button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
