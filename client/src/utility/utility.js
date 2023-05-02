import { useState, useEffect } from 'react';

export function useFetch(url, setLoading, startingState)
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

		fetchUrl().then(() =>
		{
			setLoading(false)
		});

	}, [url, setLoading]);

	return data;

}

export function getHeight(initial)
{
	let inchesFloat = initial * 3.9370;
	let feetFloat = inchesFloat / 12;
	let feet = Math.floor(feetFloat);
	let inches = Math.round((feetFloat - feet) * 12);
	return `${feet}' ${inches}"`;
}

export function getWeight(initial)
{
	let kg = initial / 10;
	let lb = kg * 2.204623;
	let rounded = Math.round(lb * 10) / 10;
	return rounded;
}

export function getAbilities(data)
{
	let myAbilities = data.map((ability) =>
	{
		let myAbility = ability.ability.name;
		return capitalize(myAbility);
	})

	return myAbilities.join(", ")
}

export function capitalize(word){
	return word.charAt(0).toUpperCase() + word.slice(1);
}