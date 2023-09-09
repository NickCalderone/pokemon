import styled from 'styled-components';
import Tile from './Tile';
import Loading from './shared/Loading';

export default function AllTiles({ data, loading })
{

	let myTiles = loading ? <Loading /> : data.map((pokemon, index) =><Tile name={pokemon.name} url={pokemon.url} key={index} />)

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