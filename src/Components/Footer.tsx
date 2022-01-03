import styled from "styled-components";

export const FooterBox = styled.footer`
	width: 100%;
	padding: 30px;
	text-align: center;
	font-size: 12px;
	opacity: 0.8;
`;

function Footer() {
	return (
		<FooterBox>&copy; {new Date().getFullYear()} gyeongyeon-jeon - All rights reserved</FooterBox>
	);
}

export default Footer;