import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../utility/utility';
import { useState } from 'react';
import Image from '../components/pokemon/Image'
import useGetPokemon from '../hooks/useGetPokemon'

export default function Pokemon()
{

	let { pokemon } = useParams();

	let [loading, setLoading] = useState(true)

	let url = `/api/${pokemon}`;
	let data = useFetch(url, setLoading, {});

	console.log(data)

	return (
		<div>
			{/* Optional chaining prevents errors when the data has yet to be loaded */}
			{/* {data?.name} */}
			{/* only evals first, since it doesnt need to get to second */}
			{loading ? (<div>loading</div>) : (
				<div>
					<img src={data.sprites.other["official-artwork"].front_default} />
					<h2>{data.name}</h2>
					{data.types.map((type, index) => <TypeSpan key={index}>{type.type.name}</TypeSpan>)}
				</div>
			)}
		</div>
	)
}

let TypeSpan = styled.span`
	background-color: blue;
	padding: 5px 10px;
	border-radius: 7px;
	margin: 5px;
	color: white;
`

// null coalesing ?.
// prevent content from eval
// check out react query to inform how to use useFetch within react
// bring loading state into useFetch
// lookup react strict mode for why its rerendering without the usefetch
// help react and general react discord channels