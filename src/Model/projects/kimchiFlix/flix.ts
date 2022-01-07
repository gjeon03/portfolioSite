import data from "./flix.json";
import mainImage from "../../../Images/projects/kimchiFlixImage/main.jpeg";
import movieImage from "../../../Images/projects/kimchiFlixImage/movie.jpeg";
import tvImage from "../../../Images/projects/kimchiFlixImage/tv.jpeg";
import searchImage from "../../../Images/projects/kimchiFlixImage/search.jpeg";
import detailImage from "../../../Images/projects/kimchiFlixImage/detail.jpeg";

export const flixData = () => {
	const result = data;
	result.page[0].image = mainImage;
	result.page[1].image = movieImage;
	result.page[2].image = tvImage;
	result.page[3].image = searchImage;
	result.page[4].image = detailImage;
	return result;
};