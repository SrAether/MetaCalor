//peticiones al backend

import axios from './axios.js';

export const getAlimentosRequest = () => axios.get("/alimentos");
export const createPlatillosRequest = (data) => axios.post("/kcalconsum", datos); //mandara un objeto json
export const getPlatillosPropiosRequest = (id) => axios.post("/kcalconsum", id);
export const getPlatillosRequest = () => axios.get("/platillos");


