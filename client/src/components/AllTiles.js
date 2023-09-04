import styled from 'styled-components';
import Tile from './Tile';

export default function AllTiles({ data, loading })
{

	let fetchedData = data.map((pokemon, index) =>
		<Tile name={pokemon.name} url={pokemon.url} key={index} />
	)

	let myTiles = loading ? (<div>loading</div>) : fetchedData;

	return (
		<Tiles>
			{myTiles}
		</Tiles>
	)

}

let Tiles = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
	border: solid 2px black;
`