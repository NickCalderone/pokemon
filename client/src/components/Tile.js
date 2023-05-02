import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Tile({ name, url }){

	return (
		<Link to={`/pokemon/${name}`}>
			<TileWrapper>
				<Name>{name}</Name>
			</TileWrapper>
		</Link>
	)

}

let TileWrapper = styled.div`
	border: solid 2px black;
`

let Name = styled.h2`

`