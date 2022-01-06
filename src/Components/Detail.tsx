import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { auctionData } from "../Model/projects/usedAuction/auctionData";

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
	height: 100vh;
	max-width: 1200px;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 20px;
	background-color: white;
	z-index: 700;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const CloseBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const PageNumber = styled.span`
	height: 100%;
	font-size: 30px;
	padding: 20px 0 0 20px;
`;
const Close = styled(motion.svg)`
	width: 40px;
	margin: 10px;
	cursor: pointer;
	:hover{
		color: ${props => props.theme.skills};
	}
`;
const ContentsBox = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;
const Contents = styled(motion.div)`
	width: 100%;
	height: 100%;
	padding: 20px;
	position: absolute;
`;
const PageBox = styled.div`
	width: 100%;
`;
const PageLocationBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	div:not(div:last-child) {
		margin-right: 3px;
	}
`;
const PageLocation = styled.div<{ bgcolor: string }>`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${props => props.bgcolor};
	cursor: pointer;
`;
const BtnBox = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px 0;
`;
const Btn = styled(motion.div)`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 23px;
	font-weight: 600;
	user-select: none;
`;

//Center Contents
const ImageBox = styled.div`
	width: 100%;
	height: auto;
`;
const Image = styled.img`
	width: 100%;
	height: auto;
	border: 1px solid ${props => props.theme.skills};
	pointer-events: none;
`;
const DesBox = styled.div`
	display: flex;
	flex-direction: column;
`;
const DesTitle = styled.span`
	font-size: 20px;
	font-weight: 600;
	padding: 10px 0;
`;
const Des = styled.span`
	margin-bottom: 3px;
`;

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0
		};
	}
};

const moveBtn = {
	hover: {
		scale: 1.1,
		color: "#FF9651",
		transition: {
			delay: 0,
			duaration: 0.1,
			type: "tween",
		},
	}
}

interface IData {
	id: number;
	page: {
		currentPage: number,
		title: string,
		des: string[],
		image: string
	}[]
}

function Detail() {
	const id = useLocation().pathname.split("/")[2];
	const { scrollY } = useViewportScroll();
	const navigate = useNavigate();
	const onOverlayClick = () => navigate("/");
	const [[page, direction], setPage] = useState([0, 0]);
	const [pageData, setPageData] = useState<IData>();
	useEffect(() => {
		const auctionDatas = auctionData();
		if (auctionDatas.id === +id) {
			setPageData(auctionDatas);
		}
	}, []);
	const paginate = (newDirection: number) => {
		if (pageData?.page.length as number - 1 < page + newDirection) {
			setPage([0, newDirection]);
		} else if (0 > page + newDirection) {
			setPage([pageData?.page.length as number - 1, newDirection]);
		} else {
			setPage([page + newDirection, newDirection]);
		}
	};
	const swipeConfidenceThreshold = 10000;
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity;
	};
	const onPageLocationClick = (index: number) => {
		setPage([index, index - page]);
	};
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
				style={{ top: scrollY.get() }}
			>
				<CloseBox>
					<PageNumber>{`No.${pageData?.page[page].currentPage}`}</PageNumber>
					<Close
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						fill="currentColor"
						onClick={onOverlayClick}
					>
						<motion.path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
					</Close>
				</CloseBox>
				<ContentsBox>
					<AnimatePresence initial={false} custom={direction}>
						<Contents
							key={page}
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: { type: "tween", stiffness: 300, damping: 30 },
								opacity: { duration: 0.2 }
							}}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={1}
							onDragEnd={(e, { offset, velocity }) => {
								const swipe = swipePower(offset.x, velocity.x);

								if (swipe < -swipeConfidenceThreshold) {
									paginate(1);
								} else if (swipe > swipeConfidenceThreshold) {
									paginate(-1);
								}
							}}
						>
							<ImageBox>
								<Image src={pageData?.page[page].image} />
							</ImageBox>
							<DesBox>
								<DesTitle>{pageData?.page[page].title}</DesTitle>
								{pageData?.page[page].des.map((des, index) =>
									<Des key={index}>{`${index + 1}) ${des}`}</Des>
								)}
							</DesBox>
						</Contents>
					</AnimatePresence>
				</ContentsBox>
				<PageBox>
					<PageLocationBox>
						{pageData?.id === +id ?
							pageData.page.map((data, index) => {
								let bgcolor = "#BFBFBF";
								if (page === index) {
									bgcolor = "#FF9651";
								}
								return <PageLocation
									key={index}
									{...{ bgcolor }}
									onClick={() => onPageLocationClick(index)}
								/>
							})
							: null}
					</PageLocationBox>
					<BtnBox>
						<Btn
							variants={moveBtn}
							whileHover="hover"
							className="next"
							onClick={() => paginate(-1)}
						>
							{"<"}
						</Btn>
						<Btn
							variants={moveBtn}
							whileHover="hover"
							className="prev"
							onClick={() => paginate(1)}
						>
							{">"}
						</Btn>
					</BtnBox>
				</PageBox>
			</DetailContainer>
		</>
	);
}

export default Detail;