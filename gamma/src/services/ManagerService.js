import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getAll=(id)=>{
  return axios.get(API_URL +"member/" + id);
};
const create = (id,data) => {
  return axios.post(API_URL+"member/"+id, data);
};
const createPayment = (data) => {
  console.log(data);
  return axios.post(API_URL+"payment", data);
};
const createEquipment = (id,data) => {
  console.log(data);
  console.log(id);
  return axios.post(API_URL+"equipment/" + id, data);
};
const createTrainer = (id,data) => {
  console.log(data);
  console.log(id);
  return axios.post(API_URL+"trainer/" + id, data);
};
const showPayment = (id) => {
  
  return axios.get(API_URL+"payment/"+id);
};
const showEquipment = (id) => {
  
  return axios.get(API_URL+"equipment/"+id);
};
const showTrainer = (id) => {
  
  return axios.get(API_URL+"trainer/"+id);
};
const update = (Mem_ID, data) => {
  return axios.put(API_URL+`member/${Mem_ID}`, data);
};
const get = (Mem_ID) => {
  return axios.get(API_URL + "member/detail/" + Mem_ID);
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAll,
  create,
  update,
  get,
  createPayment,
  showPayment,
  showEquipment,
  createEquipment,
  showTrainer,
  createTrainer
};

export default UserService;
