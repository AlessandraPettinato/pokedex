import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

export default function PokemonCard({ pokemon, loading, capture }) {
	if (loading) {
		return <h2>Loading</h2>;
	}

	return (
		<ul className="card-list">
			{pokemon.map((pokemon, index) => (
				<li className="pokemon-card" key={index}>
					<img
						className="list-img"
						src={pokemon.sprites.front_default}
						alt=""
					/>
					<>
						<CgPokemon onClick={capture(pokemon)} className="empty-pokeball" />
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
	);
}
