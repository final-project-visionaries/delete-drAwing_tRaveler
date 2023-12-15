import axiosClient from "./axiosClient";

const imagesApi = {
  getAll: () => axiosClient.get("images"),
};

export default imagesApi;
