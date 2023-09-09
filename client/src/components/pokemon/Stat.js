import styled, { keyframes } from "styled-components";
import { useRef } from "react";

const statMapping = {
	hp: "HP",
	attack: "Attack",
	defense: "Defense",
	speed: "Speed",
	"special-attack": "Sp. Atk",
	"special-defense": "Sp. Def",

};

const colorMapping = {
	1: "#ff0000",
	2: "#f29e3c",
	3: "#d7df44",
	4: "#9de05d",
	5: "#14a816",
	6: "#21c7bf",
	7: "#1a7db6",
	8: "#1446cd",
	9: "#a420c8",
	10: "#da00ff"
}

function formatStat(myName)
{
	return statMapping[myName] || "Error";
}

function chooseColor(number)
{
	let percent = number / 250 * 100;
	let bucket = Math.ceil(percent / 10)
	return colorMapping[bucket];
}

export default function Stat({ name, stat, index })
{

	let myStat = useRef(null);

	let myWidth = stat / 250 * 100 + "%";
	let myDelay = 100 * index + "ms";

	return (
		<Bar stat={stat}>
			<p className="stat-label">{formatStat(name)}</p>
			<p className="stat-value"><strong>{stat}</strong></p>
			<div className="stat-wrapper">
				<StatStyled chooseColor={()=>chooseColor(stat)} myWidth={myWidth} myDelay={myDelay} ref={myStat}></StatStyled>
			</div>
		</Bar>
	)
}

let grow = (props) => keyframes`
	0% {
	  	width: 0%;
	}
	100% {
		width: ${props.myWidth};
	}
`

let StatStyled = styled.div`
	width: 0%;
	border-radius: .5rem;
	display: inline-block;
	height: 100%;
	background-color: ${props => props.chooseColor};
	animation: .6s ease-in-out ${props => props.myDelay} 1 ${ props => grow(props) } forwards;
`

const Bar = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	padding-top: 5px;
	padding-bottom: 5px;

	.stat-label {
		display: inline-block;
		min-width: 70px;
		text-align: right;
		margin: 0 0 0 10px;
	}

	.stat-value {
		display: inline-block;
		min-width: 40px;
		text-align: center;
		margin: 0;
	}

	.stat-wrapper {
		width: 100%;
		height: 1rem;
	}

	.stat {
	}
`
