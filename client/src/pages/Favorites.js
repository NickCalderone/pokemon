import { useFetchAll } from "../utility/utility";
import PokemonLayout from "../components/pokemon/PokemonLayout";

export default function Favorites({ favorites, handleFavorites })
{

	let favoritedPokemon = favorites.map((pokemon, index) =>
	{

		return (
			<>
				<PokemonLayout pokemon={pokemon} favorites={favorites} handleFavorites={handleFavorites} />
			</>
		)

	})

	return (
		<>
			<h1>Favorites</h1>
			<h2>{favorites.join(", ")}</h2>
			<div>
				{favoritedPokemon}
			</div>
		</>
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