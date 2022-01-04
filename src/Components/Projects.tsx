import styled from "styled-components";
import { MaxWidthDiv } from "../Styles/maxWidth";
import { CategoryTitle } from "../Styles/title";

const Contaner = styled.div`
	width: 100%;
	height: 150vh;
	padding: 15px 0;
	background-color: #aaaaaa;
`;
const ProjectBox = styled(MaxWidthDiv)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

function Projects() {
	return (
		<Contaner>
			<ProjectBox>
				<CategoryTitle>PROJECTS</CategoryTitle>
			</ProjectBox>
		</Contaner>
	);
}

export default Projects;