import styled from "styled-components"

function findFlavorText(arra)
{

	//find the first flavor text in english
	const myText = arra.find(element => element.language.name === "en")

	//if there is no english flavor text, return the first entry
	return myText.flavor_text
}

export default function FlavorText ({data}){
	return <PStyled>{findFlavorText(data)}</PStyled>
}

let PStyled = styled.p`
	margin-top: 0;
`