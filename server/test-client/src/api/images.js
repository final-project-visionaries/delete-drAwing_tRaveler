import axiosClient from "./axiosClient";

const imagesApi = {
  getAll: () => axiosClient.get("images"),
  createData: (sendData) => axiosClient.post("images", sendData),
};

export default imagesApi;
