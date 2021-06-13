export default function CapturedPokemons({ capturedPokemons }) {
	return (
		<div>
			<h1>Here's my captured Pokemonssss</h1>
			{capturedPokemons.map((pokemon) => (
				<p>{pokemon.name}</p>
			))}
		</div>
	);
}
