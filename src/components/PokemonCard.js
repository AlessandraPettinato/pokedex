export default function PokemonCard({ pokemon, loading }) {
	if (loading) {
		return <h2>Loading</h2>;
	}
	return (
		<div>
			<ul className="card-list">
				{pokemon.map((pokemon, index) => (
					<li key={index} className="pokemon-card">
						<p className="pokemon-name">{pokemon.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
