import data from "../projectData.json";
import auctionImage from "../Images/projects/usedAuctionImage/main/main.jpeg";
import covidImage from "../Images/projects/covidImage/totalBlack.jpeg";
import flixImage from "../Images/projects/kimchiFlixImage/main.jpeg";

export const projectData = () => {
	const products = data;
	products.result[0].img = auctionImage;
	products.result[1].img = covidImage;
	products.result[2].img = flixImage;
	return products;
};