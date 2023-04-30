import { useParams } from 'react-router-dom';
import useFetch from '../utility/utility';
import { useState } from 'react';
import Image from '../components/pokemon/Image'
import useGetPokemon from '../hooks/useGetPokemon'
import Types from '../components/pokemon/Types'
import Stat from '../components/pokemon/Stat';

const PokemonDetails = ({ data, speciesData }) => (
	<div>
		<h2>{data.name}</h2>
		<img src={data.sprites.other["official-artwork"].front_default} alt={`official image of ${data.name}`} height="475" width="475" />
		<div><Types types={data.types} /></div>
		<p>{findFlavorText(speciesData.flavor_text_entries)}</p>
		<p>height:</p>
		<p>{getHeight(data.height)}</p>
		{makeStats(data.stats)}
	</div>
);

function makeStats(data){
	return (
		data.map(item => (
			// console.log(item)
			<Stat name={item.stat.name} stat={item.base_stat} />
		))
	)
}

function findFlavorText(arra)
{

	//find the first flavor text in english
	const myText = arra.find(element => element.language.name == "en")

	//if there is no english flavor text, return the first entry
	return myText.flavor_text
}

function getHeight(initial)
{
	let inchesFloat = initial * 3.9370;
	let feetFloat = inchesFloat / 12;
	let feet = Math.floor(feetFloat);
	let inches = Math.round((feetFloat - feet) * 12);
	return `${feet}' ${inches}"`;
}

export default function Pokemon()
{

	let { pokemon } = useParams();

	let [pokemonLoading, setPokemonLoading] = useState(true)
	let [pokemonSpeciesLoading, setPokemonSpeciesLoading] = useState(true)

	let speciesUrl = `/api/pokemon-species/${pokemon}`;
	let speciesData = useFetch(speciesUrl, setPokemonSpeciesLoading, {});


	let url = `/api/pokemon/${pokemon}`;
	let data = useFetch(url, setPokemonLoading, {});

	const anythingLoading = (pokemonLoading || pokemonSpeciesLoading);



	return (
		<div>
			{anythingLoading ? <div>loading</div> : <PokemonDetails data={data} speciesData={speciesData} />}
		</div>
	)
}


// null coalesing 
// optional chaining ?.
// prevent content from eval
// check out react query to inform how to use useFetch within react
// bring loading state into useFetch
// lookup react strict mode for why its rerendering without the usefetch
// help react and general react discord channels