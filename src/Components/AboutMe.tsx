import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import styled from "styled-components";
import gjeonImage from "../Images/gjeon.jpg";
import { MaxWidthDiv } from "../Styles/maxWidth";

const Contaner = styled.div`
	width: 100%;
	height: auto;
	padding-top: 100px;
`;
const Profile = styled(MaxWidthDiv)`
	width: 100%;
	height: 450px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #6BBBF4;
	color: white;
`;
const ProfileTitle = styled.span`
	font-size: 25px;
	font-weight: 400;
	padding: 10px;
	text-align: center;
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
`;
const ProfileContents = styled.span`
	display: flex;
	flex-direction: column;
	padding: 10px;
	font-size: 20px;
`;

function AboutMe() {
	const navigate = useNavigate();
	const onImageClicked = () => navigate("image");;
	return (
		<Contaner>
			<Profile>
				<ProfileTitle>GYEONGYEON JEON'S PORTFOLIO</ProfileTitle>
				<ProfileImage
					bgphoto={gjeonImage}
					layoutId="profileImage"
					onClick={onImageClicked}
				/>
				<ProfileContents>
					<span>안녕하세요. 생각하는 개발자 전경연입니다.</span>
				</ProfileContents>
			</Profile>
		</Contaner >
	);
}

export default AboutMe;