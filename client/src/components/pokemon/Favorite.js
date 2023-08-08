import styled from "styled-components"

export default function Favorite({data, favorites, handleFavorites})
{

	let favorited = favorites.includes(data.name) ? true : false;

	let className = favorited ? "favorited" : "";

	let buttonText = favorited ? "Favorited" : "Favorite";

	return (

		<FavoriteStyled className={className} onClick={() => handleFavorites(data.name)}>{buttonText}
			<HeartStyled className="heart" viewBox="0 0 100 100">
				<g transform="matrix(0.850007,0,0,0.850007,7.49949,6.04125)">
					<path d="M50,20C60.526,0 81.579,0 92.105,10C102.632,20 102.632,40 92.105,60C84.737,75 65.79,90 50,100C34.21,90 15.263,75 7.895,60C-2.632,40 -2.632,20 7.895,10C18.421,0 39.474,0 50,20Z" />
				</g>
			</HeartStyled>
		</FavoriteStyled>
	)
}

let FavoriteStyled = styled.button`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px;
	background-color: #f4f4f4;
	border: solid 2px grey;
	border-radius: 8px;
	font-size: 20px;
	margin: 0 auto;
	cursor: pointer;
	transition: border .25s ease-in-out;

	&.favorited {
		border: solid 2px red;
	}

	&.favorited .heart path {
		fill: red;
	}

	&.favorited .heart path {
		stroke: red;
	}
`


let HeartStyled = styled.svg`
	height: 1em;
	fill: white;

	& path {
		stroke: black;
		stroke-width: 8px;
		fill: white;
		transition: stroke .25s ease-in, fill .25s ease-in-out;
	}
`