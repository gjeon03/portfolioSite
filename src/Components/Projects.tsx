import { motion } from "framer-motion";
import styled from "styled-components";
import { MaxWidthDiv } from "../Styles/MaxWidth";
import { CategoryTitle } from "../Styles/Title";
import ProjectItem from "./ProjectItem";
import { projectData } from "../Model/projectData";

const Contaner = styled.div`
	width: 100%;
	height: auto;
	padding: 15px 0 50px;
	background-color: ${props => props.theme.projects};
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
	const datas = projectData();
	return (
		<Contaner>
			<ProjectBox>
				<CategoryTitle>PROJECTS</CategoryTitle>
				<ProjectArea>
					{datas.result.map((data, index) =>
						<ProjectItem key={index} {...data} />
					)}
				</ProjectArea>
			</ProjectBox>
		</Contaner>
	);
}

export default Projects;