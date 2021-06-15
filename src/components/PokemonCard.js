import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

export default function PokemonCard({ pokemon, loading, capture }) {
	if (loading) {
		return <h2>Loading</h2>;
	}

	return (
		<ul className="card-list">
			{pokemon.map((pokemon, index) => (
				<div key={index}>
					<li className="pokemon-card">
						<CgPokemon onClick={capture(pokemon)} className="empty-pokeball" />
						<img
							className="list-img"
							src={pokemon.sprites.front_default}
							alt=""
						/>

						<p
							style={{
								fontWeight: "bold",
								textTransform: "capitalize",
								fontSize: "1.3rem",
							}}
						>
							{pokemon.name}
						</p>
						<Link to={`/pokemon/${pokemon.id}`}>
							<button className="show-details">Show details</button>
						</Link>
					</li>
				</div>
			))}
		</ul>
	);
}
