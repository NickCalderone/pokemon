import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Tile({ name }){

	return (
		<LinkWrapper className="tile" to={`/pokemon/${name}`}>
			<TileWrapper>
				<p>{name}</p>
			</TileWrapper>
		</LinkWrapper>
	)

}

let LinkWrapper = styled(Link)`
	text-align: center;
	text-transform: capitalize;
	text-decoration: none;
	width: calc((100% / 5) - (80px / 5));
`

let TileWrapper = styled.div`
	border-radius: 5px;
	padding: 15px;
	background-color: white;
	border: 1px solid #58b9df;
	color: var(--charcoal);
	transition: background-color .1s ease-in-out;

	&:hover {
		background-color: var(--charcoal);
		color: white;
	}

	& > p {
		font-size: 20px;
		margin: 0;
		transition: color .1s ease-in-out;
	}	

		:hover > p {
			color: var(--white);
	}

`