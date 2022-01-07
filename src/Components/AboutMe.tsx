import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import styled from "styled-components";
import gjeonImage from "../Images/profile/gjeon.jpg";
import { MaxWidthDiv } from "../Styles/MaxWidth";
import { CategoryTitle } from "../Styles/Title";
import bgImage from "../Images/profile/bg.jpeg";

const Contaner = styled.div`
	width: 100%;
	height: auto;
`;
const Profile = styled.div<{ bgphoto: string }>`
	background-image: linear-gradient(
		90deg,
		rgba(94, 79, 68, 0.9),
		rgba(94, 79, 68, 0.7),
		rgba(94, 79, 68, 0.9)
	), url(${(props) => props.bgphoto});
	background-size: cover;
	background-position: center center;
`;
const ProfileBox = styled(MaxWidthDiv)`
	width: 100%;
	height: 520px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 100px;
`;
const ProfileTitle = styled.span`
	font-size: 20px;
	font-weight: 400;
	padding: 10px;
	text-align: center;
	display: flex;
	flex-direction: column;
	color: white;
	font-family: 'IBM Plex Sans KR', sans-serif !important;
	span:first-child{
		padding-bottom: 5px;
	}
`;
const ProfileImage = styled(motion.div) <{ bgphoto: string }>`
	width: 300px;
	height: 300px;
	max-width: 500px;
	max-height: 500px;
	min-width: 180px;
	border-radius: 50%;
	background-image: url(${(props) => props.bgphoto});
	background-size: 100% 100%;
	background-position: center center;
	cursor: pointer;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const AboutBox = styled.div`
	background-color: ${props => props.theme.aboutMe};
`;
const AboutMeContents = styled(MaxWidthDiv)`
	width: 100%;
	height: auto;
	padding: 15px 20px;
	display:flex;
	flex-direction: column;
`;
const AboutMeInfo = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	padding: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3), 0 7px 15px rgba(0, 0, 0, 0.06);
	display:flex;
	flex-direction: column;
	font-size: 18px;
	font-family: 'IBM Plex Sans KR', sans-serif !important;
	span {
		padding-bottom: 5px;
	}
`;

function AboutMe() {
	const navigate = useNavigate();
	const onImageClicked = () => navigate("image");
	return (
		<Contaner>
			<Profile bgphoto={bgImage}>
				<ProfileBox>
					<ProfileImage
						bgphoto={gjeonImage}
						layoutId="profileImage"
						onClick={onImageClicked}
					/>
					<ProfileTitle>
						<span>안녕하세요.</span>
						<span>생각하는 개발자 전경연입니다.</span>
					</ProfileTitle>
				</ProfileBox>
			</Profile>
			<AboutBox>
				<AboutMeContents>
					<CategoryTitle>ABOUT ME</CategoryTitle>
					<AboutMeInfo>
						<span>• 트렌드를 추구하고 공유하며, 어제보다 나은 개발자가 되는것이 목표입니다.</span>
						<span>• 항상 왜?에 대해 생각하고 이유를 찾고자합니다.</span>
						<span>• 배움을 멈추지 않으며 저에게 새로운 프로젝트는 또 다른 모험입니다.</span>
					</AboutMeInfo>
				</AboutMeContents>
			</AboutBox>
		</Contaner >
	);
}

export default AboutMe;