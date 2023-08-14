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
	/* margin: 0 auto; */
	position: relative;
	height: 0;
	padding-top: 100%;
	/* display: flex;
	justify-content: center;
	align-items: center; */

	& img {
		position: absolute;
		top: 0;
		left: 0;
		max-width: 100%;
		height: auto;
		/* display: block;
		object-fit: contain;
		height: 100%;
		width: 100%; */
	}
`
