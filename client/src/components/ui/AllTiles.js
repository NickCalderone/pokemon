import styled from 'styled-components';
import Tile from './Tile';
import Loading from './Loading';

export default function AllTiles({ data, loading })
{

	let myTiles = loading ? <Loading /> : data.map((pokemon) =><Tile name={pokemon.name} key={pokemon.name} />)

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
	background-color: white;
`