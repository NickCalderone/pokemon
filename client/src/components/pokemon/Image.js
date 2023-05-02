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
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;

	& img {
		display: block;
		object-fit: contain;
		height: 100%;
		width: 100%;
	}
`
