import { motion } from "framer-motion";
import styled from "styled-components";

export const Item = styled(motion.div)`
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
const Image = styled(motion.div) <{ logo: string }>`
	width: 100%;
	height: 100%;
	background-image: url(${props => props.logo});
	background-size: 100% 100%;
`;
export const LogoInfo = styled(motion.div)`
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

export const itemVariants = {
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

export const infoVariants = {
	hover: {
		opacity: 1,
		transition: {
			delay: 0.5,
			duaration: 0.1,
			type: "tween",
		},
	},
};

interface IProps {
	index?: number,
	url: string,
	info: string,
	flag: string,
}

function Logo({ index, url, info, flag }: IProps) {
	const onItemClick = () => {
		if (flag === "github") {
			window.open("https://github.com/gjeon03", "_blank");
		}
	}
	return (
		<Item
			key={index}
			whileHover="hover"
			initial="normal"
			variants={itemVariants}
			onClick={onItemClick}
		>
			<Image logo={url} />
			<LogoInfo variants={infoVariants}>
				<span>{info}</span>
			</LogoInfo>
		</Item>
	);
}

export default Logo;