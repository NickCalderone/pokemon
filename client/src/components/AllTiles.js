import styled from 'styled-components';
import Tile from './Tile';

let Tiles = styled.div`
	padding: 20px;
	border: solid 2px black;
`

export default function AllTiles({ data })
{

	console.log(data)

	let myTiles = data.map((pokemon, index) =>
	 	<Tile name={pokemon.name} url={pokemon.url} />
		// <Tiles key={index}>{pokemon.name}</Tiles>
	)

	return (
		<div className="wahoo">
			{myTiles}
		</div>
	)

}