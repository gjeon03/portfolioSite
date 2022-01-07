import data from "./covid19.json";
import mainImage from "../../../Images/projects/covidImage/main.jpeg";
import totalBlackImage from "../../../Images/projects/covidImage/totalBlack.jpeg";
import detailBlackImage from "../../../Images/projects/covidImage/detailBlack.jpeg";
import detailBlack2Image from "../../../Images/projects/covidImage/detailBlack2.jpeg";
import totalWhiteImage from "../../../Images/projects/covidImage/totalWhite.jpeg";
import detailWhiteImage from "../../../Images/projects/covidImage/detailWhite.jpeg";

export const covidData = () => {
	const result = data;
	result.page[0].image = mainImage;
	result.page[1].image = totalBlackImage;
	result.page[2].image = detailBlackImage;
	result.page[3].image = detailBlack2Image;
	result.page[4].image = totalWhiteImage;
	result.page[5].image = detailWhiteImage;
	return result;
};