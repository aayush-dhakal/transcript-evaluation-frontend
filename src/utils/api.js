import axios from "axios";

const instance = axios.create({
  baseURL: "", // Replace it with your backend base URL
});

export default instance;
