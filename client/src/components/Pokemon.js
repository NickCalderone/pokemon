import { useParams } from 'react-router-dom';
import useGetPokemon from '../hooks/useGetPokemon';
import Image from './pokemon/Image';

export default function Pokemon()
{
	let { pokemon } = useParams();

	let nick = useGetPokemon(pokemon);
	console.log(nick)

	return (
		<>
			<div>working hey {pokemon}</div>
			<Image src={pokemon.results.sprites.other.official - artwork.front_default} />
		</>
	)
}