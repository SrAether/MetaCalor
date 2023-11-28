import axios from "axios";

const instance = axios.create({
  baseURL: "http://metacalor/api",
  withCredentials: true,
});

export default instance;
