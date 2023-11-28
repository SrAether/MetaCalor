import axios from "axios";

const instance = axios.create({
  baseURL: "http://metacalor.com/api",
  withCredentials: true,
});

export default instance;
