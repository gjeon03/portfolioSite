import { motion } from "framer-motion";
import styled from "styled-components";
import { MaxWidthDiv } from "../Styles/MaxWidth";
import { CategoryTitle } from "../Styles/Title";
import githubImage from "../Images/logo/github.png";
import Logo from "./Logo";
import {
	Item,
	LogoInfo,
	itemVariants,
	infoVariants
} from "./Logo";
import { LogoBox } from "../Styles/LogoBox";

const Container = styled.div`
	width: 100%;
	height: auto;
	background-color: ${props => props.theme.archiving};
	padding: 15px 0;
`;
const ArchivingBox = styled(MaxWidthDiv)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const ArchivingItems = styled(LogoBox)`
	div {
		padding: 5px;
	}
`;
const Blog = styled.div`
	width: 100%;
	height: 100%;
	background-color: #25c394;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: 700;
	font-size: 20px;
`;

function Archiving() {
	const onBlogClick = () => window.open("https://velog.io/@dev_space", "_blank");
	return (
		<Container>
			<ArchivingBox>
				<CategoryTitle>ARCHIVING</CategoryTitle>
				<ArchivingItems>
					<Item
						whileHover="hover"
						initial="normal"
						variants={itemVariants}
						onClick={onBlogClick}
					>
						<Blog>
							<span>Velog</span>
						</Blog>
						<LogoInfo variants={infoVariants}>
							<span>Move on Click</span>
						</LogoInfo>
					</Item>
					<Logo {...{
						url: githubImage,
						info: "Move on Click",
						flag: "github"
					}} />
				</ArchivingItems>
			</ArchivingBox>
		</Container>
	);
}

export default Archiving;