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
const DetailContainer = styled(motion.div)`
	width: 100%;
	height: 800px;
	max-width: 1200px;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 40px;
	background-color: white;
	z-index: 700;
	display: flex;
	flex-direction: column;
`;
const CloseBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
`;
const Close = styled(motion.svg)`
	width: 40px;
	margin: 10px;
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
			<DetailContainer
				layoutId={`detail${id}`}
				style={{ top: scrollY.get() + 70 }}
			>
				<CloseBox>
					<Close
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						fill="currentColor"
					>
						<motion.path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
					</Close>
				</CloseBox>
			</DetailContainer>
		</>
	);
}

export default Detail;