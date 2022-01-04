import { motion } from "framer-motion";
import styled from "styled-components";
import { MaxWidthDiv } from "../Styles/maxWidth";
import { CategoryTitle } from "../Styles/title";
import ProjectItem from "./ProjectItem";

const Contaner = styled.div`
	width: 100%;
	height: auto;
	padding: 15px 0 50px;
	background-color: #bfbfbf;
`;
const ProjectBox = styled(MaxWidthDiv)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const ProjectArea = styled.div`
	width: 100%;
	height: auto;
	display: grid;
	gap: 30px;
	font-family: 'IBM Plex Sans KR', sans-serif !important;
`;

function Projects() {
	return (
		<Contaner>
			<ProjectBox>
				<CategoryTitle>PROJECTS</CategoryTitle>
				<ProjectArea>
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
				</ProjectArea>
			</ProjectBox>
		</Contaner>
	);
}

export default Projects;