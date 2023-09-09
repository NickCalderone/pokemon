import styled from "styled-components"

export default function H1(props)
{
	return (

		<H1Wrapper>
			<H1Styled>
				{props.children}
			</H1Styled>
		</H1Wrapper>
	)
}

let H1Wrapper = styled.div`
	display: block;
	border-bottom: 4px solid var(--charcoal);	
	margin-bottom: 40px;
`

let H1Styled = styled.h1`
	font-size: 3rem;
	color: white;
	background-color: var(--charcoal);
	display: inline-block;
	padding: 5px 80px 5px 15px;
	margin-bottom: 0px;
	clip-path: polygon(0 0, calc(100% - 60px) 0, 100% 100%, 0 100%);
`