import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = styled.nav`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const Col = styled.div`
	width: 100%;
	height: 60px;
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
	return (
		<Nav>
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