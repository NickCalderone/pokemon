import styled from "styled-components"

export default function Favorite({ data, favorites, handleFavorites })
{
	console.log(data);

	// let favorited = favorites.includes(data.name) ? true : false;
	let favorited = favorites.some((element) => element.name === data.name);

	let className = favorited ? "favorited" : "";

	let buttonText = favorited ? "Favorited" : "Favorite";

	return (

		<FavoriteStyled className={className} onClick={() => handleFavorites(data)}>{buttonText}
			<HeartStyled className="heart" viewBox="0 0 100 100">
				<g transform="matrix(0.850007,0,0,0.850007,7.49949,6.04125)">
					<path d="M50,20C60.526,0 81.579,0 92.105,10C102.632,20 102.632,40 92.105,60C84.737,75 65.79,90 50,100C34.21,90 15.263,75 7.895,60C-2.632,40 -2.632,20 7.895,10C18.421,0 39.474,0 50,20Z" />
				</g>
			</HeartStyled>
		</FavoriteStyled>
	)
}

let FavoriteStyled = styled.button`
	background-color: #e6e6e6;
	display: flex;
	align-items: center;
	padding: 10px;
	border: solid 2px var(--charcoal);
	border-radius: 5px;
	font-size: 20px;
	cursor: pointer;
	transition: border .25s ease-in-out, background-color .25s ease-in-out, color .25s ease-in-out;
	justify-content: space-between;
	min-width: 137px;

	&.favorited {
		border: solid 2px red;
		background-color: white
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