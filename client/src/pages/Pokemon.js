import { useParams } from 'react-router-dom';
import { useFetch } from '../utility/utility';
import { useState } from 'react';
import PokemonLayout from '../components/pokemon/PokemonLayout';

export default function Pokemon({favorites, handleFavorites})
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
			{anythingLoading ? <div>loading</div> : <PokemonLayout data={data} speciesData={speciesData} favorites={favorites} handleFavorites={handleFavorites} />}
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