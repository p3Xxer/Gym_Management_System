import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getAll=(id)=>{
  return axios.get(API_URL +"member/" + id);
};
const getAllWorkout=()=>{
  return axios.get(API_URL +"workout/");
};
const getWorkout=(id)=>{
  return axios.get(API_URL +"workout/detail/"+id);
};
const getBranch=(id)=>{
  return axios.get(API_URL +"branch_manager/"+id);
};
const getEquipment=(id)=>{
  return axios.get(API_URL +"equipment/detail/"+id);
};
const getTrainer=(id)=>{
  console.log(id);
  return axios.get(API_URL +"trainer//detail/"+id);
};
const updateBranch=(id,data)=>{
  return axios.put(API_URL +"branch_manager/"+id,data);
};
const updateWorkout=(id,data)=>{
  return axios.put(API_URL +"workout/"+id,data);
};
const updateTrainer=(id,data)=>{
  return axios.put(API_URL +"trainer/"+id,data);
};
const updateEquipment=(id,data)=>{
  return axios.put(API_URL +"equipment/"+id,data);
};
const getAllBranches=()=>{
  return axios.get(API_URL +"branch_manager/");
};
const create = (id,data) => {
  return axios.post(API_URL+"member/"+id, data);
};
const createBranch = (data) => {
  return axios.post(API_URL+"branch_manager/", data);
};
const AddWorkout = (data) => {
  return axios.post(API_URL+"workout", data);
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
const removeMember=(Mem_ID)=>{
  return axios.delete(API_URL+"member/"+Mem_ID);
}
const removeTrainer=(Trainer_ID)=>{
  return axios.delete(API_URL+"trainer/"+Trainer_ID);
}
const removeEquipment=(Equipment_ID)=>{
  return axios.delete(API_URL+"equipment/"+Equipment_ID);
}
const removeWorkout=(Workout_ID)=>{
  return axios.delete(API_URL+"workout/"+Workout_ID);
}
const removeBranch=(Branch_ID)=>{
  return axios.delete(API_URL+"branch_manager/"+Branch_ID);
}
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
  createTrainer,
  getAllWorkout,
  AddWorkout,
  createBranch,
  getAllBranches,
  getWorkout,
  getBranch,
  updateBranch,
  updateWorkout,
  removeMember,
  getTrainer,
  updateTrainer,
  getEquipment,
  updateEquipment,
  removeTrainer,
  removeEquipment,
  removeWorkout,
  removeBranch
};

export default UserService;
