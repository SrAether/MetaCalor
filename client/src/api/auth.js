import axios from "./axios";

//const API = "http://localhost:4000/api";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify");

export const logout = () => axios.post("/logout");

export const getProfileRequest = () => axios.get("/profile");

///////////////////////////////////////////////////////////

export const KcalConsumRequest = (id) => axios.post(`/kcalconsum`, id);


