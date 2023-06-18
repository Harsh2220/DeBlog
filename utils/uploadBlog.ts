import { ethers } from "ethers";
import CONTRACT_ADDRESS, { ABI } from "../constants";

const uploadNewBlog = async (
  title: string,
  metadata: string,
  cover: string
) => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      const DeBlog = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const data = await DeBlog.createBlog(title, metadata, cover);
      return data
    }
  } catch (error) {
    console.log(error);
    console.log("l lag gaye");
  }
};

export default uploadNewBlog;
