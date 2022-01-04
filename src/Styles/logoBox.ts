import { motion } from "framer-motion";
import styled from "styled-components";

export const LogoBox = styled(motion.div)`
	width: 100%;
	height: auto;
	align-items: center;
	border-radius: 20px;
	padding: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
	gap:10px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.06);
`;