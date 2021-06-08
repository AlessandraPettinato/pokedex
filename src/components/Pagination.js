export default function Pagination({ pokemonPerPage, totalPokemon, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<nav>
				<ul>
					{pageNumbers.map((number) => (
						<li key={number}>
							<a onClick={() => paginate(number)} href="#">
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
