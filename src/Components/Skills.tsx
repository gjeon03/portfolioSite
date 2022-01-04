import { motion } from "framer-motion";
import styled from "styled-components";
import { MaxWidthDiv } from "../Styles/maxWidth";
import { CategoryTitle } from "../Styles/title";
import { logoImages } from "../Util/skillLogo";

const Contaner = styled(motion.div)`
	width: 100%;
	height: auto;
	background-color: #ff9651;
	padding: 15px 0;
`;
const SkillBox = styled(MaxWidthDiv)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const SkillItems = styled(motion.div)`
	width: 100%;
	height: auto;
	align-items: center;
	border-radius: 20px;
	padding: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
	gap:10px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.06);
	div:nth-child(1){
		padding: 10px;
	}
	div:not(div:nth-child(1)){
		padding: 5px;
	}
`;
const SkillItem = styled(motion.div)`
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

function Skills() {
	return (
		<Contaner>
			<SkillBox>
				<CategoryTitle>SKILLS</CategoryTitle>
				<SkillItems>
					{logoImages.result.map((data, index) =>
						<SkillItem
							key={index}
							whileHover="hover"
							initial="normal"
							variants={itemVariants}
						>
							<Logo logo={data.url} />
							<LogoInfo variants={infoVariants}>
								<span>{data.info}</span>
							</LogoInfo>
						</SkillItem>
					)}
				</SkillItems>
			</SkillBox>
		</Contaner>
	);
}

export default Skills;