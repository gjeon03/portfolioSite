import data from "./portfolio.json";
import mainImage from "../../../Images/projects/portfolio/main.jpeg";
import m_mainImage from "../../../Images/projects/portfolio/m_main.jpeg";

export const portfolioData = () => {
	const result = data;
	result.page[0].image = mainImage;
	result.page[1].image = m_mainImage;
	return result;
};