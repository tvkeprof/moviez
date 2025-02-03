import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({ baseURL: baseUrl });

export const getPopular = async () => {
  try {
    return await axiosInstance.get("/movie/popular?language=en-US&page=1");
  } catch (err) {
    console.log(err);
  }
};

export const getdUpcoming = async () => {
  try {
    return await axiosInstance.get("/movie/popular?language=en-US&page=1");
  } catch (err) {
    console.log(err);
  }
};
