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

export function useFetchAll( pokemon )
{

	// set the loading state for the pokemon data to true
	let [pokemonLoading, setPokemonLoading] = useState(true)
	let [pokemonSpeciesLoading, setPokemonSpeciesLoading] = useState(true)


	// fetch all data about pokemon 
	let speciesUrl = `/api/pokemon-species/${pokemon}`;
	let speciesData = useFetch(speciesUrl, setPokemonLoading, {});
	let url = `/api/pokemon/${pokemon}`;
	let data = useFetch(url, setPokemonSpeciesLoading, {});

	return [ data, pokemonLoading, speciesData, pokemonSpeciesLoading];
	
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