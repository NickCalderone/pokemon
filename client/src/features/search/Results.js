import styled from "styled-components"
import { NavLink } from 'react-router-dom'

export default function Results({ results })
{

	let myResults = results.map((result, index) => <ResultAnchor key={index} to={`/pokemon/${result.item.name}`}><Result key={index}>{result.item.name}</Result></ResultAnchor>)

	return (
		<ResultsWrapper>
			{myResults}
		</ResultsWrapper>
	)
}

let ResultsWrapper = styled.div`
	background-color: white;
	padding: 1px;
	display: flex;
	flex-direction: column;
	gap: 1px;
	position: absolute;
	width: 100%;
	top: 100%;
`

let ResultAnchor = styled(NavLink)`
	text-decoration: none;
`

let Result = styled.p`
	background-color: grey;
	color: black;
	padding: 10px;
	margin: 0;
`