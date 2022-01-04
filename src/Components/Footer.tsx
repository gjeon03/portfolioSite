import styled from "styled-components";

export const FooterBox = styled.footer`
	width: 100%;
	padding: 30px;
	font-size: 12px;
	opacity: 0.8;
	display: flex;
	flex-direction: column;
	align-items: center;
	span:first-child {
		padding-bottom: 3px;
	}
`;

function Footer() {
	return (
		<FooterBox>
			<span>Email: gjeon0321@gmail.com</span>
			<span>&copy; {new Date().getFullYear()} gyeongyeon-jeon - All rights reserved</span>
		</FooterBox>
	);
}

export default Footer;