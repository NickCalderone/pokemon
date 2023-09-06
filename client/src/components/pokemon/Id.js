import styled from "styled-components"

export default function Id(props){
	return (
		<Span>
			{props.children}
		</Span>
	)
}

let Span = styled.span`
	color: var(--charcoal);
	font-size: 2rem;
`