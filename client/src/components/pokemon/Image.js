import styled from "styled-components";

export default function Image({src}){
	return (
		<ImageContainer>
			<img src={src} />
		</ImageContainer>
	)
}

let ImageContainer = styled.div`
	background-color: pink;
	margin: 10px;
	padding: 10px;
`
