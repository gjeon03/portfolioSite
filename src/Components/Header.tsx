import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const Nav = styled(motion.nav)`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	position: fixed;
	z-index: 9999;
`;
const Col = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
`;
const Title = styled.div`
	font-size: 40px;
	font-weight: 600;
	padding-left: 10px;
`;
const Items = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-around;
	font-weight: 400;
`;
const Item = styled.li`
	cursor: pointer;
`;
const LightBox = styled(motion.span)`
	width: 30px;
	height: 5px;
	position: absolute;
	border-radius: 2.5px;
	bottom: -7px;
	left: 0;
	right: 0;
	margin: 0 auto;
	background-color: ${(props) => props.theme.red};
`;

interface IPropsRef {
	aboutMeRef?: React.RefObject<HTMLDivElement>,
	skillsRef?: React.RefObject<HTMLDivElement>,
	projectsRef?: React.RefObject<HTMLDivElement>,
}

const navVariants = {
	top: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		color: "black"
	},
	scroll: {
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		color: "white"
	},
};

function Header({ aboutMeRef, skillsRef, projectsRef }: IPropsRef) {
	const onClickAboutMe = () => {
		aboutMeRef?.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const onClickSkills = () => {
		skillsRef?.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const onClickProjects = () => {
		projectsRef?.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const navAnimation = useAnimation();
	const { scrollY } = useViewportScroll();
	useEffect(() => {
		scrollY.onChange(() => {
			if (scrollY.get() > 80) {
				navAnimation.start("scroll");
			} else {
				navAnimation.start("top");
			}
		});
	}, [scrollY, navAnimation]);
	return (
		<Nav variants={navVariants} animate={navAnimation}>
			<Col>
				<Title>Portfolio</Title>
			</Col>
			<Col>
				<Items>
					<Item onClick={onClickAboutMe}>
						About Me
						<LightBox layoutId="lightBox" />
					</Item>
					<Item onClick={onClickSkills}>
						Skills
						<LightBox layoutId="lightBox" />
					</Item>
					<Item onClick={onClickProjects}>
						Projects
						<LightBox layoutId="lightBox" />
					</Item>
				</Items>
			</Col>
		</Nav>
	);
}

export default Header;