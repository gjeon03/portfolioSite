import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { MaxWidthDiv } from "../Styles/maxWidth";

const Nav = styled(motion.nav)`
	width: 100%;
	position: fixed;
	z-index: 100;
	color: white;
`;
const NavArea = styled(MaxWidthDiv)`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
	:hover{
		color: #ce8550;
	}
`;

interface IPropsRef {
	aboutMeRef?: React.RefObject<HTMLDivElement>,
	archivingRef?: React.RefObject<HTMLDivElement>,
	skillsRef?: React.RefObject<HTMLDivElement>,
	projectsRef?: React.RefObject<HTMLDivElement>,
}

const navVariants = {
	top: {
		backgroundColor: "rgba(0, 0, 0, 0)",
	},
	scroll: {
		backgroundColor: "rgba(61, 49, 42, 0.9)",
	},
};

function Header({ aboutMeRef, archivingRef, skillsRef, projectsRef }: IPropsRef) {
	const onClickAboutMe = () => {
		aboutMeRef?.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const onClickArchiving = () => {
		archivingRef?.current?.scrollIntoView({ behavior: 'smooth' });
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
			<NavArea>
				<Col>
					<Title>JGY's Portfolio</Title>
				</Col>
				<Col>
					<Items>
						<Item onClick={onClickAboutMe}>
							About Me
						</Item>
						<Item onClick={onClickArchiving}>
							Archiving
						</Item>
						<Item onClick={onClickSkills}>
							Skills
						</Item>
						<Item onClick={onClickProjects}>
							Projects
						</Item>
					</Items>
				</Col>
			</NavArea>
		</Nav>
	);
}

export default Header;