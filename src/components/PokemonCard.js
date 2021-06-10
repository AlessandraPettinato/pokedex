export default function PokemonCard({ name }) {
	return (
		<div className="card-list">
			<div className="pokemon-card">
				<p>{name}</p>
			</div>
		</div>
	);
}
