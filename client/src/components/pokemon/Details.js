import styled from "styled-components";
import { getHeight, getWeight, getAbilities, capitalize } from '../../utility/utility';
import Detail from "./Detail";

export default function Details({data, speciesData})
{
	return (
		<DetailsStyled>
			<Detail label="Height" value={getHeight(data.height)} />
			<Detail label="Weight" value={getWeight(data.weight) + " lb"} />
			<Detail label="Abilities" value={getAbilities(data.abilities)} />
			<Detail label="Habitat" value={capitalize(speciesData.habitat.name)} />
			<Detail label="Base Happiness" value={speciesData.base_happiness} />
			<Detail label="Capture Rate" value={speciesData.capture_rate} />
		</DetailsStyled>
	)
}

let DetailsStyled = styled.div`
	display: flex;
	padding: 20px;
	gap: 10px;
	flex-wrap: wrap;
	background-color: #58B9DF;
	border-radius: 10px;
	height: 100%;
`