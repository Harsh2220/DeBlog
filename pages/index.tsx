import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { ethers } from "ethers";
import { ABI } from "../constants";
import useStore from "../store/Store";
import CONTRACT_ADDRESS from "../constants"
const Home: NextPage = () => {
  const state = useStore();
  const setBlogs = state.setBlogs;
  const blogs = state.blogs;
  const [detailBlogs, setDetailBlogs] = useState("");

  useEffect(() => {
    getAllBlogs();
  }, [detailBlogs]);

  const getAllBlogs = async () => {
    try {
      const { ethereum } : any = window;
      if (!detailBlogs) {
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum, "any");
          const signer = provider.getSigner();
          const DeBlog = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
          const AllBlogs = await DeBlog.getAllblogs();
          console.log(AllBlogs);
          setBlogs(AllBlogs);
          setDetailBlogs(AllBlogs);
          console.log(blogs);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <Sidebar blogs={detailBlogs} />;
};

export default Home;
