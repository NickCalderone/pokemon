export default function Favorites({ favorites })
{
	return (
		<>
			<h1>Favorites</h1>
			<h2>{favorites.join(", ")}</h2>
		</>
	)
}