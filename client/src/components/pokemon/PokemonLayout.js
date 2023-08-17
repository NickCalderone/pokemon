import styled from "styled-components";
import { capitalize } from '../../utility/utility';
import Image from './Image'
import Types from './Types'
import Stats from './Stats';
import FlavorText from './FlavorText';
import Details from './Details';
import Favorite from './Favorite';

export default function PokemonLayout({ data, speciesData, favorites, handleFavorites })
{
	return (
		<>
			<H2>{capitalize(data.name)}</H2>
			<Favorite data={data} favorites={favorites} handleFavorites={handleFavorites} />
			<Layout>
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
		</>
	)
}

let Layout = styled.div`
	display: grid;
	gap: 20px;
	padding: 20px;
	grid-template-rows: auto auto;
	grid-template-columns: 1fr 1fr;
	max-width: 1010px;
	margin: 0 auto;
`

let Avatar = styled.div`
	grid-column: 1;
	grid-row: 1 / 3;
	border-radius: 10px;
	background-color: rgb(230, 230, 230);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

let DetailsTop = styled.div`
	grid-column: 2;
	grid-row: 1;
`

let DetailsBottom = styled.div`
	grid-column: 2;
	grid-row: 2;
`

let H2 = styled.h2`
	text-align: center;
`