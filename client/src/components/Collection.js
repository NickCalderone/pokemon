export default function Collection({ collection })
{
	let myCollection = collection.value.map((pokemon) =>
	{
		return (

			<div>
				<p>Name: {pokemon.name}</p>
				<p>Height: {pokemon.height}</p>
				<p>Weight: {pokemon.weight}</p>
			</div>
		)
	})
	return (
		{ myCollection }
	)
}