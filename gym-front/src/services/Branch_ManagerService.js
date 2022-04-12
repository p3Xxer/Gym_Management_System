import http from "../http-common";

const getAll = () => {
  return http.get("/branch_manager");
};

const get = Branch_ID => {
  return http.get(`/branch_manager/${Branch_ID}`);
};

const create = data => {
  return http.post("/branch_manager", data);
};

const update = (Branch_ID, data) => {
  return http.put(`/branch_manager/${Branch_ID}`, data);
};

const remove = Branch_ID => {
  return http.delete(`/branch_manager/${Branch_ID}`);
};

const removeAll = () => {
  return http.delete(`/branch_manager`);
};

const findByBranch_Name = Branch_Name => {
  return http.get(`/branch_manager?Branch_Name=${Branch_Name}`);
};

const branch_managerService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByBranch_Name
};

export default branch_managerService;
