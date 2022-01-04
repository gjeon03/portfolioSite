import { motion } from "framer-motion";
import styled from "styled-components";
import { MaxWidthDiv } from "../Styles/maxWidth";
import { CategoryTitle } from "../Styles/title";
import githubImage from "../Images/github.png";

const Container = styled.div`
	background-color: white;
`;
const ArchivingBox = styled(MaxWidthDiv)`
	width: 100%;
	height: auto;
	padding-top: 10px;
	display:flex;
	flex-direction: column;
`;
const ArchivingItems = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	padding: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.06);
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
	gap:10px;
	margin-bottom: 20px;
	div {
		padding: 5px;
	}
`;
const ArchivingItem = styled(motion.div)`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: white;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	position: relative;
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
const Logo = styled(motion.div) <{ logo: string }>`
	width: 100%;
	height: 100%;
	background-image: url(${props => props.logo});
	background-size: 100% 100%;
`;
const LogoInfo = styled(motion.div)`
	width: 100%;
	height: 100%;
	padding: 10px;
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	border-radius: 50%;
	position: absolute;
	color: white;
	span {
		font-weight: 400;
		text-align: center;
	}
`;

const itemVariants = {
	normal: {
		scale: 1,
	},
	hover: {
		scale: 1.4,
		y: -20,
		transition: {
			delay: 0.5,
			duaration: 0.1,
			type: "tween",
		},
	},
};

const infoVariants = {
	hover: {
		opacity: 1,
		transition: {
			delay: 0.5,
			duaration: 0.1,
			type: "tween",
		},
	},
};

function Archiving() {
	const onBlogClick = () => window.open("https://velog.io/@dev_space", "_blank");
	const onGitHubClick = () => window.open("https://github.com/gjeon03", "_blank");
	return (
		<Container>
			<ArchivingBox>
				<CategoryTitle>ARCHIVING</CategoryTitle>
				<ArchivingItems>
					<ArchivingItem
						whileHover="hover"
						initial="normal"
						variants={itemVariants}
						onClick={onBlogClick}
					>
						<Blog>
							<span>Velog</span>
						</Blog>
						<LogoInfo variants={infoVariants}>
							<span>Click Move</span>
						</LogoInfo>
					</ArchivingItem>
					<ArchivingItem
						whileHover="hover"
						initial="normal"
						variants={itemVariants}
						onClick={onGitHubClick}
					>
						<Logo
							logo={githubImage}
						/>
						<LogoInfo variants={infoVariants}>
							<span>Click Move</span>
						</LogoInfo>
					</ArchivingItem>
				</ArchivingItems>
			</ArchivingBox>
		</Container>
	);
}

export default Archiving;