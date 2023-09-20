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

	let favoritedPokemon = favorites.map((pokemon) =>
	{

		return (
			<PokemonLayout pokemon={pokemon.name} favorites={favorites} handleFavorites={handleFavorites} key={pokemon.name}/>
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