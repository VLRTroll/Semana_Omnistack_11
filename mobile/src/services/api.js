import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.13:3333" //<http://<ip_da_máquina>:<porta_do_servidor>
});

export default api;
