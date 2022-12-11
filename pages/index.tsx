import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "../utils/utils";
import useStore from "../store/Store";
const Home: NextPage = () => {
  const state = useStore();
  const setBlogs = state.setBlogs;
  const [detailBlogs, setDetailBlogs] = useState("");
  useEffect(() => {
    getAllBlogs();
  }, [detailBlogs]);
  const getAllBlogs = async () => {
    try {
      const { ethereum } = window;
      if (!detailBlogs) {
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum, "any");
          const signer = provider.getSigner();
          const DeBlog = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
          const AllBlogs = await DeBlog.getAllblogs();
          console.log(AllBlogs);

          setDetailBlogs(AllBlogs);
          setBlogs(AllBlogs);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <Sidebar blogs={detailBlogs} />;
};

export default Home;
