import { useState, useEffect } from 'react';

export default function useFetch(url, setLoading, startingState)
{

	// create data state
	const [data, setData] = useState(startingState);

	//fetch data and update state
	useEffect(() =>
	{

		async function fetchUrl()
		{
			let response = await fetch(url);
			let json = await response.json();
			setData(json.results)
		}

		fetchUrl().then(() => {
			setLoading(false)
		});

	}, [url, setLoading]);

	return data;

}