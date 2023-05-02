import styled from "styled-components"

export default function Heart()
{
	return (

		<HeartStyled viewBox="0 0 100 100">
			<g transform="matrix(0.850007,0,0,0.850007,7.49949,6.04125)">
				<path d="M50,20C60.526,0 81.579,0 92.105,10C102.632,20 102.632,40 92.105,60C84.737,75 65.79,90 50,100C34.21,90 15.263,75 7.895,60C-2.632,40 -2.632,20 7.895,10C18.421,0 39.474,0 50,20Z" />
			</g>
		</HeartStyled>
	)
}

let HeartStyled = styled.svg`
	height: 1em;
	fill: white;

	& path {
		stroke: black;
		stroke-width: 8px;
	}

	& path {
		fill: white;
		transition: fill .25s ease-in-out;
	}

	&:hover {
		& path {
			fill: red;
		}
	}
`