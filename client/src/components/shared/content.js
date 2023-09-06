import styled from "styled-components"

export default function Content (props)
{
	return (
		<ContentStyled>
			{props.children}
		</ContentStyled>
	)
}

let ContentStyled = styled.div`
	max-width: 1010px;
	margin: 0 auto;
`