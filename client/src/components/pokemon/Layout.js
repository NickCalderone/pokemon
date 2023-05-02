import styled from "styled-components"
import Image from "./Image"
import Types from "./Types";
import FlavorText from "./FlavorText";
import Details from "./Details";
import Stats from "./Stats";

export default function Layout()
{
	return (
		<LayoutStyled>
			<h2>{data.name}</h2>
			<Image src={data.sprites.other["official-artwork"].front_default} name={data.name}>
				<div><Types types={data.types} /></div>
			</Image>
			<p>working</p>
			<FlavorText data={speciesData.flavor_text_entries} />
			<Details data={data} speciesData={speciesData} />
			<Stats data={data.stats} />
		</LayoutStyled>
	)
}

// const PokemonDetails = ({ data, speciesData }) => (
// );

let LayoutStyled = styled.div`
	background-color: #f4f4f4;
	display: grid;

`