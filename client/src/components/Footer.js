import styled from "styled-components"
import Content from "./shared/content"

export default function Footer()
{
	return (

		<FooterStyled className="footer">
			<Content>
				<FooterInner>
					<Div>
						<P>Nick Calderone</P>
						<P><A href="https://nickcalderone.dev">https://nickcalderone.dev</A></P>
					</Div>
				</FooterInner>
			</Content>
		</FooterStyled>
	)
}

let FooterStyled = styled.footer`
  	background-color: #424242;
  	opacity: 0.8;
`

let FooterInner = styled.div`
	height: 120px;
	display: flex;
	margin: 0 auto;	
	align-items: center;
	justify-content: end;
`
let Div = styled.div`
	text-align: right;
`

let P = styled.p`
	color: white;
	margin: 0;
`

let A = styled.a`
	color: white;
`