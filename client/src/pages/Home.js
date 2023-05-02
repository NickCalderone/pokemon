import { useState } from 'react';
import { useFetch } from '../utility/utility'
import AllTiles from '../components/AllTiles'

export default function Home()
{

	let [loading, setLoading] = useState(true);

	let data = useFetch("/api/pokemon-links", setLoading, []);
	console.log(data)

	return (
		<>
			<h1>Home</h1>
			<AllTiles data={data} loading={loading} />
		</>
	)
}