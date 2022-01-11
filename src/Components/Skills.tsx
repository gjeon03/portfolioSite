import { motion } from "framer-motion";
import styled from "styled-components";
import { MaxWidthDiv } from "../Styles/MaxWidth";
import { CategoryTitle } from "../Styles/Title";
import { logoImages } from "../Model/logo/skillLogo";
import Logo from "./Logo";
import { LogoBox } from "../Styles/LogoBox";

const Contaner = styled(motion.div)`
	width: 100%;
	height: auto;
	background-color: ${props => props.theme.skills};
	padding: 15px 0;
`;
const SkillBox = styled(MaxWidthDiv)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const SkillItems = styled(LogoBox)`
	div {
		padding: 5px;
	}
`;

function Skills() {
	return (
		<Contaner>
			<SkillBox>
				<CategoryTitle>SKILLS</CategoryTitle>
				<SkillItems>
					{logoImages.result.map((data, index) =>
						<Logo key={index} {...{
							index: index,
							url: data.url,
							info: data.info,
							flag: "skill"
						}} />
					)}
				</SkillItems>
			</SkillBox>
		</Contaner>
	);
}

export default Skills;