import { useParams } from 'react-router-dom';
import { capitalize, useFetch } from '../utility/utility';
import { useState } from 'react';
import styled from 'styled-components';
import Image from '../components/pokemon/Image'
import Types from '../components/pokemon/Types'
import Stats from '../components/pokemon/Stats';
import FlavorText from '../components/pokemon/FlavorText';
import Details from '../components/pokemon/Details';
import Heart from '../components/pokemon/Heart';

const PokemonLayout = ({ data, speciesData }) => (
	<>
		<H2>{capitalize(data.name)}</H2>
		<Favorite>Favorite<Heart /></Favorite>
		<Layout>
			<Avatar>
				<Image src={data.sprites.other["official-artwork"].front_default} name={data.name} />
				<Types types={data.types} />
			</Avatar>
			<DetailsTop>
				<FlavorText data={speciesData.flavor_text_entries} />
				<Stats data={data.stats} />
			</DetailsTop>
			<DetailsBottom>
				<Details data={data} speciesData={speciesData} />
			</DetailsBottom>
		</Layout>
	</>
);

let Layout = styled.div`
	display: grid;
	gap: 20px;
	padding: 20px;
	grid-template-rows: auto auto;
	grid-template-columns: 1fr 1fr;
	max-width: 1010px;
	margin: 0 auto;
`

let Favorite = styled.button`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px;
	background-color: #f4f4f4;
	border: solid 2px red;
	border-radius: 8px;
	font-size: 20px;
	margin: 0 auto;
`

let Avatar = styled.div`
	grid-column: 1;
	grid-row: 1 / 3;
	border-radius: 10px;
	background-color: rgb(230, 230, 230);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

let DetailsTop = styled.div`
	grid-column: 2;
	grid-row: 1;
`

let DetailsBottom = styled.div`
	grid-column: 2;
	grid-row: 2;
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