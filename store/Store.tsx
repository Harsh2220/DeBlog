import create from "zustand";

const useStore = create((set) => ({
  notifications:false,
  blogs: [],
  setBlogs: (value: any) => set({ blogs: value,notification:false }),
  setNotification:(value:any)=>set({notifications:value})
}));


export default useStore;
