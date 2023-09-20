import styled from "styled-components";
import { capitalize, useFetchAll } from '../../utility/utility';
import Image from './Image'
import Types from './Types'
import Stats from './Stats';
import FlavorText from './FlavorText';
import Details from './Details';
import Favorite from './Favorite';
import Id from "./Id";
import Loading from "../ui/Loading";

export default function PokemonLayout({ pokemon, favorites, handleFavorites })
{

	let [loading, pokemonData] = useFetchAll(pokemon);

	console.log(pokemonData)

	return (
		<>
			{loading ? <Loading />:
				<Layout>
					<Title>
						<TitleLeft>
							<Id>#{pokemonData.data.id}</Id><H2>{capitalize(pokemonData.name)}</H2>
						</TitleLeft>
						<Favorite data={pokemonData} favorites={favorites} handleFavorites={handleFavorites} />
					</Title>
					<Avatar>
						<Image src={pokemonData.data.sprites.other["official-artwork"].front_default} name={pokemonData.data.name} />
						<Types types={pokemonData.data.types} />
					</Avatar>
					<DetailsTop>
						<FlavorText data={pokemonData.species.flavor_text_entries} />
						<Stats data={pokemonData.data.stats} />
					</DetailsTop>
					<DetailsBottom>
						<Details data={pokemonData.data} speciesData={pokemonData.species} />
					</DetailsBottom>
				</Layout>
			}
		</>
	)
}

let Layout = styled.div`
	display: grid;
	gap: 20px;
	padding: 20px;
	grid-template-rows: auto auto auto;
	grid-template-columns: 1fr 1fr;
	max-width: 1010px;
	margin: 0 auto;
	background-color: white;
	border-radius: 20px;

	&:not(:last-child){
		margin-bottom: 40px;
	}
`

let Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-column: 1 / 3;
	grid-row: 1;
	`

let TitleLeft = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`

let Avatar = styled.div`
	grid-column: 1;
	grid-row: 2 / 4;
	border-radius: 10px;
	background-color: rgb(230, 230, 230);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

let DetailsTop = styled.div`
	grid-column: 2;
	grid-row: 2;
`

let DetailsBottom = styled.div`
	grid-column: 2;
	grid-row: 3;
`

let H2 = styled.h2`
	text-align: center;
	margin-top: 0;
`