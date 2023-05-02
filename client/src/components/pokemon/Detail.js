import styled from "styled-components";

export default function Detail ({label, value}){
	return (
		<DetailStyled>
			<Label>{label}</Label>
			<Value>{value}</Value>
		</DetailStyled>
	)
}

let DetailStyled = styled.div`
	flex: 1 0 40%;
`
let Label = styled.p`
	color: white;
	margin: 0 0 10px 0;
`
let Value = styled.p`
	color: #333333;
	margin: 0;
`