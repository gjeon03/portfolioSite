import { motion, useViewportScroll } from "framer-motion";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

const Overlay = styled(motion.div)`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 0;
	z-index: 600;
`;
const BicImage = styled(motion.div)`
	width: 100%;
	height: 800px;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 40px;
	background-color: white;
	z-index: 700;
`;

function Detail() {
	const id = useLocation().pathname.split("/")[2];
	const { scrollY } = useViewportScroll();
	const navigate = useNavigate();
	const onOverlayClick = () => navigate("/");
	return (
		<>
			<Overlay
				onClick={onOverlayClick}
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				whileHover={{ zIndex: 600 }}
			/>
			<BicImage
				layoutId={`detail${id}`}
				style={{ top: scrollY.get() + 70 }}
			/>
		</>
	);
}

export default Detail;