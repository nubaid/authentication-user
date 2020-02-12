import { getFromURL } from "./api";
export const fetchPosts = () =>
  getFromURL("https://jsonplaceholder.typicode.com/posts");
