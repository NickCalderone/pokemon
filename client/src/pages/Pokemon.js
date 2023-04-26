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

	// console.log(data)

	return (
		<div>
			{/* Optional chaining prevents errors when the data has yet to be loaded */}
			{/* {data?.name} */}
			{/* only evals first, since it doesnt need to get to second */}
			{(pokemonLoading || pokemonSpeciesLoading) ? (<div>loading</div>) : (
				<div>
					<h2>{data.name}</h2>
					<img src={data.sprites.other["official-artwork"].front_default} alt={`official image of ${data.name}`} height="475" width="475" />
					<Types types={data.types} />
					{speciesData.flavor_text_entries[0].flavor_text}
				</div>
			)}
		</div>
	)
}


// null coalesing ?.
// prevent content from eval
// check out react query to inform how to use useFetch within react
// bring loading state into useFetch
// lookup react strict mode for why its rerendering without the usefetch
// help react and general react discord channels