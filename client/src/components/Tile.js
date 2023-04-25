import styled from 'styled-components';

let TileWrapper = styled.div`
	border: solid 2px black;
`
let Name = styled.h2`

`

export default function Tile({ name, url }){
	console.log(url);

	return (
		<a href={url}>
			<TileWrapper>
				<Name>{name}</Name>
			</TileWrapper>
		</a>
	)

}