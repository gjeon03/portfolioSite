import data from "./projectData.json";
import auctionImage from "../../Images/projects/usedAuctionImage/main.jpeg";
import covidImage from "../../Images/projects/covidImage/totalBlack.jpeg";
import flixImage from "../../Images/projects/kimchiFlixImage/main.jpeg";
import portfolioImage from "../../Images/projects/portfolio/main.jpeg";

export const projectData = () => {
	const products = data;
	products.result[0].img = auctionImage;
	products.result[1].img = covidImage;
	products.result[2].img = flixImage;
	products.result[3].img = portfolioImage;
	return products;
};