import { useParams } from 'react-router-dom';
import useFetch from '../utility/utility';
import { useState } from 'react';
import Image from '../components/pokemon/Image'
import useGetPokemon from '../hooks/useGetPokemon'
import Types from '../components/Types'

export default function Pokemon()
{

	let { pokemon } = useParams();

	let [pokemonLoading, setPokemonLoading] = useState(true)
	let [pokemonSpeciesLoading, setPokemonSpeciesLoading] = useState(true)

	let url = `/api/pokemon/${pokemon}`;
	let data = useFetch(url, setPokemonLoading, {});

	let speciesUrl = `/api/pokemon-species/${pokemon}`;
	let speciesData = useFetch(speciesUrl, setPokemonSpeciesLoading, {});

	function findFlavorText( arra ){

		//find the first flavor text in english
		let myText = arra.find(element => element.language.name == "en")
		console.log(myText.flavor_text.normalize("NFD").replace("\\u000c", " "))
		
		//if there is no english flavor text, return the first entry
		return myText ? myText.flavor_text.normalize().replace("\\u000c", " ") : arra[0].flavor_text.normalize();
	}

	function getHeight(initial){
		let inchesFloat = initial * 3.9370;
		let feetFloat = inchesFloat / 12;
		let feet = Math.floor(feetFloat);
		let inches = Math.round((feetFloat - feet) * 12);
		return `${feet}' ${inches}"`;
	}

	return (
		<div>
			{(pokemonLoading || pokemonSpeciesLoading) ? (<div>loading</div>) : (
				<div>
					<h2>{data.name}</h2>
					<img src={data.sprites.other["official-artwork"].front_default} alt={`official image of ${data.name}`} height="475" width="475" />
					<div><Types types={data.types} /></div>
					<p>{findFlavorText(speciesData.flavor_text_entries)}</p>
					<p>height:</p>
					<p>{getHeight(data.height)}</p>
				</div>
			)}
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