import { useParams } from 'react-router-dom';
import { capitalize, useFetch } from '../utility/utility';
import { useState } from 'react';
import styled from 'styled-components';
import Image from '../components/pokemon/Image'
import Types from '../components/pokemon/Types'
import Stats from '../components/pokemon/Stats';
import FlavorText from '../components/pokemon/FlavorText';
import Details from '../components/pokemon/Details';

const PokemonLayout = ({ data, speciesData }) => (
	<>
		<H2>{capitalize(data.name)}</H2>
		<Layout>
			<Avatar>
				<Image src={data.sprites.other["official-artwork"].front_default} name={data.name} />
				<Types types={data.types} />
			</Avatar>
			<DetailsWrapper>
				<FlavorText data={speciesData.flavor_text_entries} />
				<Stats data={data.stats} />
				<br />
				<Details data={data} speciesData={speciesData} />
			</DetailsWrapper>
		</Layout>
	</>
);

let Layout = styled.div`
	display: grid;
	gap: 40px;
	padding: 40px;
	grid-template-rows: auto;
	grid-template-columns: 1fr 1fr;
`

let Avatar = styled.div`
	grid-column: 1;
`

let DetailsWrapper = styled.div`
	grid-column: 2;
`

let H2 = styled.h2`
	text-align: center;
`

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
			{anythingLoading ? <div>loading</div> : <PokemonLayout data={data} speciesData={speciesData} />}
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