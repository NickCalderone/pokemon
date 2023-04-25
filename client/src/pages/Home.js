import { Heading } from './styles'
import Tile from '../components/Tile'
import useFetch from '../utility'
import AllTiles from '../components/AllTiles'

export default function Home()
{

	let pokemonLinks = useFetch("/api/pokemon-links");

	return (
		<>
		<Heading>Home</Heading>
		{/* <Tile pokemon="ditto" url="https://mypokemon.com" /> */}
		<AllTiles data={ pokemonLinks } />
		</>
	)
}