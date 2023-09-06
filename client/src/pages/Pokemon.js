import { useParams } from 'react-router-dom';
import { useFetchAll } from '../utility/utility';
import Content from '../components/shared/content';
import PokemonLayout from '../components/pokemon/PokemonLayout';
import H1 from '../components/shared/H1';

export default function Pokemon({ favorites, handleFavorites })
{

	// get the pokemon name from the url
	let { pokemon } = useParams();

	// fetch all data on the pokemon
	// let [ data, pokemonLoading, speciesData, pokemonSpeciesLoading ] = useFetchAll(pokemon);

	// Check if anything is loading
	// const anythingLoading = (pokemonLoading || pokemonSpeciesLoading);

	return (
		<Content>
			<H1>Pokédex Entry</H1>
			{/* only display component if we are done loading */}
			<PokemonLayout pokemon={pokemon} favorites={favorites} handleFavorites={handleFavorites} />
		</Content>
	)
}


// null coalesing 
// optional chaining ?.
// prevent content from eval
// check out react query to inform how to use useFetch within react
// bring loading state into useFetch
// lookup react strict mode for why its rerendering without the usefetch
// help react and general react discord channels