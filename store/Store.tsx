import create from "zustand";

const useStore = create((set) => ({
  blogs: [],
  setBlogs: (value: any) => set({ blogs: value }),
}));

export default useStore;
