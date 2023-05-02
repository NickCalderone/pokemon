import { useState } from 'react';
import { useFetch } from '../utility/utility'
import AllTiles from '../components/AllTiles'

export default function Home({favorites})
{

	let [loading, setLoading] = useState(true);

	let data = useFetch("/api/pokemon-links", setLoading, []);

	return (
		<>
			<h1>Home</h1>
			<h2>{favorites.join(", ")}</h2>
			<AllTiles data={data} loading={loading} />
		</>
	)
}