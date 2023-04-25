import styled from 'styled-components';

export default function Tile({ name, url }){

	return (
		<a href={url}>
			<TileWrapper>
				<Name>{name}</Name>
			</TileWrapper>
		</a>
	)

}

let TileWrapper = styled.div`
	border: solid 2px black;
`

let Name = styled.h2`

`