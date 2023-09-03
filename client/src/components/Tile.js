import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Tile({ name, url }){

	return (
		// <Link class="tile" to={`/pokemon/${name}`}>
		// 	<TileWrapper>
		// 		<Name>{name}</Name>
		// 	</TileWrapper>
		// </Link>
		<LinkWrapper className="tile" to={`/pokemon/${name}`}>
			<TileWrapper>
				<Name>{name}</Name>
			</TileWrapper>
		</LinkWrapper>
	)

}

let TileWrapper = styled.div`
	border: solid 2px black;
	padding: 10px;
`

let LinkWrapper = styled(Link)`
	text-align: center;
	flex: 0 1 15%;
	max-width: 15%;
	text-transform: capitalize;
`

let Name = styled.h2`

`