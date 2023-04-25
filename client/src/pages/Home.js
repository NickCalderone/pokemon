import { useState } from 'react';
import useFetch from '../utility/utility'
import AllTiles from '../components/AllTiles'

export default function Home()
{

	let [loading, setLoading] = useState(true);

	let pokemonLinks = useFetch("/api/pokemon-links", setLoading);

	return (
		<>
		<h1>Home</h1>
		<AllTiles data={ pokemonLinks } loading={loading} />
		</>
	)
}