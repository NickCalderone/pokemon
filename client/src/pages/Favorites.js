import { useFetchAll } from "../utility/utility";
import Content from "../components/shared/content";
import H1 from "../components/shared/H1";
import PokemonLayout from "../components/pokemon/PokemonLayout";
import Loading from "../components/ui/Loading";

export default function Favorites({ favorites, handleFavorites })
{

	if (favorites.length === 0)
	{
		return (
			<Content>
				<H1>Favorites</H1>
				<div>
					You have no favorites!
				</div>
			</Content>
		)
	}

	let favoritedPokemon = favorites.map((pokemon, index) =>
	{

		return (
			<PokemonLayout pokemon={pokemon} favorites={favorites} handleFavorites={handleFavorites} key={index}/>
		)

	})

	return (
		<Content>
			<H1>Favorites</H1>
			<div>
				{favoritedPokemon}
			</div>
		</Content>
	)
}

// export default function Pokemon({favorites, handleFavorites})
// {

// 	// get the pokemon name from the url
// 	let { pokemon } = useParams();

// 	// fetch all data on the pokemon
// 	let [ data, pokemonLoading, speciesData, pokemonSpeciesLoading ] = useFetchAll(pokemon);

// 	// Check if anything is loading
// 	const anythingLoading = (pokemonLoading || pokemonSpeciesLoading);

// 	return (
// 		<div>
// 			{/* only display component if we are done loading */}
// 			{anythingLoading ? <div>loading</div> : <PokemonLayout data={data} speciesData={speciesData} favorites={favorites} handleFavorites={handleFavorites} />}
// 		</div>
// 	)
// }