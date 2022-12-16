import storeFiles from "./imageUpload";
import CONTRACT_ADDRESS, { ABI } from "../constants";
import { ethers } from "ethers";

const uploadNewBlog = async (title ,subTitle, authorName, content, image) => {
    try {
      const URI = await storeFiles(image);
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const DeBlog = new ethers.Contract(
          CONTRACT_ADDRESS,
          ABI,
          signer
        );
        await DeBlog.newBlog(Math.round(Math.random() * 1000000), title, subTitle, authorName, content, URI);
      }
    } catch (error) {
      console.log(error);
      console.log("l lag gaye")
    }
  }

export default uploadNewBlog;