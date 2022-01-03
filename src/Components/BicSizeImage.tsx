import { motion, useViewportScroll } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import gjeonImage from "../Images/gjeon.jpg";

const Overlay = styled(motion.div)`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 0;
	z-index: 200;
`;

const BicImage = styled(motion.img)`
	width: 70%;
	height: auto;
	max-width: 700px;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	overflow: hidden;
	z-index: 300;
	border-radius: 40px;
`;

function BicSizeImage() {
	const { scrollY } = useViewportScroll();
	const navigate = useNavigate();
	const onOverlayClick = () => navigate("/");
	return (
		<>
			<Overlay
				onClick={onOverlayClick}
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				whileHover={{ zIndex: 200 }}
			/>
			<BicImage
				layoutId="profileImage"
				src={gjeonImage}
				style={{ top: scrollY.get() + 70 }}
			/>
		</>
	);
}

export default BicSizeImage;