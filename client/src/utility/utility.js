import { useState, useEffect } from 'react';

export function useFetchLegacy(url, setLoading, startingState)
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

export function useFetch(url)
{

	// create data state
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);


	//fetch data and update state
	useEffect(() =>
	{

		async function fetchUrl()
		{
			let response = await fetch(url);
			let json = await response.json();
			setData(json.results);
			setLoading(false);
		}

		fetchUrl();

	}, []);

	return [loading, data];

}

export function useFetchPokemon(setLoading, setData)
{

	//fetch data and update state
	useEffect(() =>
	{

		async function fetchUrl()
		{
			let response = await fetch("/api/pokemon-links/");
			let json = await response.json();
			setData(json.results)
		}

		fetchUrl().then(() =>
		{
			setLoading(false)
		});

	}, [setData, setLoading]);

}

export function useFetchAll(pokemon)
{

	let returnObj = {};

	// fetch all data about pokemon 
	let speciesUrl = `/api/pokemon-species/${pokemon}`;
	let [speciesLoading, speciesData] = useFetch(speciesUrl);
	let url = `/api/pokemon/${pokemon}`;
	let [dataLoading, data] = useFetch(url);


	returnObj.name = pokemon;
	returnObj.data = data;
	returnObj.species = speciesData;

	let anythingLoading = (dataLoading || speciesLoading);

	return [anythingLoading, returnObj];

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

export function capitalize(word)
{
	return word.charAt(0).toUpperCase() + word.slice(1);
}

