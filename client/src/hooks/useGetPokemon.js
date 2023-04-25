import { useEffect, useState } from 'react';

export default function useGetPokemon(pokemon)
{

	let [data, setData] = useState('');

	useEffect(() =>
	{
		async function getData()
		{
			await fetch(`/api/${pokemon}`)
			.then(res => res.json())
			.then(res => setData(res));
		};

		getData();
	}, [])

	return data

}