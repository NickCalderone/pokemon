import styled from "styled-components";

export default function Image({ src, name })
{
	return (
		<ImageContainer>
			<img src={src} alt={`official artwork of ${name}`} height="475" width="475" />
		</ImageContainer>
	)
}

let ImageContainer = styled.div`

	& img {
		display: block;
		margin: 0 auto;
		border-radius: 10px;
		border: solid #afafaf 2px;
	}
`
