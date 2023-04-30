import styled from "styled-components";
import { useEffect } from "react";

const statMapping = {
	hp: "HP",
	attack: "Attack",
	defense: "Defense",
	speed: "Speed",
	["special-attack"]: "Sp. Atk",
	["special-defense"]: "Sp. Def",

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

function formatStat(myName) {
	return statMapping[myName] || "Error";
}

function chooseColor(number){
	let percent = number / 250 * 100;
	let bucket =  Math.ceil(percent / 10)
	return colorMapping[bucket];
}

export default function Stat({ name, stat })
{

	console.log("color", chooseColor(stat))

	useEffect(()=>{
		let stats = document.querySelectorAll(".stat");
		stats.forEach((stat, index) => {
			let myStat = stat.dataset.stat;
			stat.style.width = myStat / 250 * 100 + "%";
			stat.style.transitionDelay = 100 * index + "ms";
		})
	}, [])

	return (
		<Bar stat={stat}>
			<p className="stat-label">{formatStat(name)}</p><p className="stat-value"><strong>{stat}</strong></p><div data-stat={stat} className="stat"></div>
		</Bar>
	)
}

const Bar = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	width: 400px;
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

	.stat {
		border-radius: .5rem;
		display: inline-block;
		height: 1rem;
		width: 0px;
		background-color: ${props => chooseColor(props.stat)};
		transition: width .5s ease-in-out;
	}
`
