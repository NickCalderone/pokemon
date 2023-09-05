import styled from "styled-components";
import { capitalize, useFetchAll } from '../../utility/utility';
import Image from './Image'
import Types from './Types'
import Stats from './Stats';
import FlavorText from './FlavorText';
import Details from './Details';
import Favorite from './Favorite';

// export default function PokemonLayout({ data, speciesData, favorites, handleFavorites })
export default function PokemonLayout({ pokemon, favorites, handleFavorites })
{

	let [data, pokemonLoading, speciesData, pokemonSpeciesLoading] = useFetchAll(pokemon);

	const anythingLoading = (pokemonLoading || pokemonSpeciesLoading);


	return (
		<>
			{anythingLoading ? <div>loading</div> :
					<Layout>
						<Title>
							<H2>{capitalize(data.name)}</H2>
							<Favorite data={data} favorites={favorites} handleFavorites={handleFavorites} />
						</Title>
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
	grid-column: 1 / 3;
	grid-row: 1;
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