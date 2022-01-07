import data from "./usedAuction.json";
import mainImage from "../../../Images/projects/usedAuctionImage/main.jpeg";
import loginImage from "../../../Images/projects/usedAuctionImage/login.jpeg";
import joinImage from "../../../Images/projects/usedAuctionImage/join.jpeg";
import editImage from "../../../Images/projects/usedAuctionImage/edit.jpeg";
import profileImage from "../../../Images/projects/usedAuctionImage/profile.jpeg";
import p_uploadImage from "../../../Images/projects/usedAuctionImage/p_upload.jpeg";
import productImage from "../../../Images/projects/usedAuctionImage/product.jpeg";
import p_editImage from "../../../Images/projects/usedAuctionImage/p_edit.jpeg";
import comentsImage from "../../../Images/projects/usedAuctionImage/coments.jpeg";
import bidImage from "../../../Images/projects/usedAuctionImage/bid.jpeg";

export const auctionData = () => {
	const result = data;
	result.page[0].image = mainImage;
	result.page[1].image = loginImage;
	result.page[2].image = joinImage;
	result.page[3].image = editImage;
	result.page[4].image = profileImage;
	result.page[5].image = p_uploadImage;
	result.page[6].image = productImage;
	result.page[7].image = p_editImage;
	result.page[8].image = comentsImage;
	result.page[9].image = bidImage;
	return result;
};