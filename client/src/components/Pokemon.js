import {useParams} from 'react-router-dom';
import useGetPokemon from '../hooks/useGetPokemon';

export default function Pokemon()
{
	// let myCollection = collection.value.map((pokemon) =>
	// {
	// 	return (
	// 		<div>
	// 			working
	// 		</div>
	// 	)
	// })
	let { pokemon } = useParams();

	let nick = useGetPokemon(pokemon);
	console.log(nick)


	return (
	<div>working hey {pokemon}</div>
	)
}