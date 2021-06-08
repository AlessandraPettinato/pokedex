export default function PokemonCard({ pokemon, loading }) {
	if (loading) {
		return <h2>Loading</h2>;
	}
	return (
		<div>
			<ul>
				{pokemon.map((pokemon, index) => (
					<li key={index}>{pokemon.name}</li>
				))}
			</ul>
		</div>
	);
}
