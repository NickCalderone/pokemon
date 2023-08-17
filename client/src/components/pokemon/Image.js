import styled from "styled-components";

export default function Image({ src, name })
{
	return (
		<ImageContainer>
			<img src={src} alt={`official artwork of ${name}`} width="475" />
		</ImageContainer>
	)
}

let ImageContainer = styled.div`
	// Prevent Content jumping when image loads
	position: relative;
	height: 0;
	padding-top: 100%;

	& img {
		position: absolute;
		top: 0;
		left: 0;
		max-width: 100%;
		height: auto;
	}
`
