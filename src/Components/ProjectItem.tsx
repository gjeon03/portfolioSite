import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Area = styled.div`
	width: 100%;
	min-height: 400px;
	background-color: white;
	border-radius: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	padding: 10px;
	gap: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3), 0 7px 15px rgba(0, 0, 0, 0.3);
`;
const AreaCol = styled.div`
	width: 100%;
	height: 100%;
`;
const ImageBox = styled(motion.div) <{ zindex: number }>`
	width: 100%;
	height: 100%;
	padding: 60px 0;
	background-color: ${props => props.theme.projects};
	border-radius: 20px;
	position: relative;
	cursor: pointer;
	z-index: ${props => props.zindex};
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
`;
const MoveOverlay = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	border-radius: 20px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
`;
const MovoIcon = styled.span`
	font-size: 40px;
	color: white;
`;
const ProjectContents = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const ContentsTop = styled.div`
	display: flex;
	flex-direction: column;
`;
const ProjectTitle = styled.span`
	font-size: 25px;
	font-weight: 400;
	border-bottom: 2px solid black;
`;
const Skills = styled.div`
	width: 100%;
	height: auto;
	padding-top: 5px;
`;
const Skill = styled.span`
	width: auto;
	display: inline-block;
	font-size: 14px;
	opacity: 0.6;
	background-color: black;
	color: white;
	padding: 3px;
	border-radius: 7px;
	margin:0 3px 3px 0;
`;
const ProjectText = styled.span`
	padding-top: 20px;
`;
const ProjectLink = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
`;
const ProjectSite = styled(motion.svg)`
	width: 23px;
	margin-right: 10px;
	cursor: pointer;
`;
const ProjectGithub = styled(motion.svg)`
	width: 30px;
	cursor: pointer;
`;

interface IProps {
	id: number,
	name: string,
	description: string,
	skills: string[],
	link: {
		site: string,
		github: string
	},
	img: string
}

const movoVariants = {
	hover: {
		opacity: 1,
		transition: {
			delay: 0.3,
			duaration: 0.1,
			type: "tween",
		},
	},
}

function ProjectItem({ ...data }: IProps) {
	const navigate = useNavigate();
	const [zIndex, setZIndex] = useState(100);
	const onSiteClick = () => window.open(data.link.site, "_blank");
	const onGithubClick = () => window.open(data.link.github, "_blank");
	const onMovoClick = () => {
		setZIndex(200);
		return navigate(`/detail/${data.id}`);
	};
	const layoutComplateHandler = () => {
		setZIndex(100);
	}
	return (
		<Area>
			<AreaCol>
				<ImageBox
					onLayoutAnimationComplete={layoutComplateHandler}
					layoutId={`detail${data.id}`}
					zindex={zIndex}
					onClick={onMovoClick}
				>
					<Image src={data.img} />
					<MoveOverlay variants={movoVariants} whileHover="hover">
						<MovoIcon>Click</MovoIcon>
					</MoveOverlay>
				</ImageBox>
			</AreaCol>
			<AreaCol>
				<ProjectContents>
					<ContentsTop>
						<ProjectTitle>{data.name}</ProjectTitle>
						<Skills>
							{data.skills?.map((item, index) =>
								<Skill key={index}>{item}</Skill>
							)}
						</Skills>
					</ContentsTop>
					<ProjectText>
						{data.description}
					</ProjectText>
					<ProjectLink>
						<ProjectSite
							fill="currentColor"
							viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg"
							onClick={onSiteClick}
						>
							<motion.path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
						</ProjectSite>
						<ProjectGithub
							fill="currentColor"
							viewBox="0 0 448 512"
							xmlns="http://www.w3.org/2000/svg"
							onClick={onGithubClick}
						>
							<motion.path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
						</ProjectGithub>
					</ProjectLink>
				</ProjectContents>
			</AreaCol>
		</Area>
	);
}

export default ProjectItem;