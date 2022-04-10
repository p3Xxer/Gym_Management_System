import http from "../http-common";

const getAll = () => {
  return http.get("/member");
};

const get = Mem_ID => {
  return http.get(`/member/${Mem_ID}`);
};

const create = data => {
  return http.post("/member", data);
};

const update = (Mem_ID, data) => {
  return http.put(`/member/${Mem_ID}`, data);
};

const remove = Mem_ID => {
  return http.delete(`/member/${Mem_ID}`);
};

const removeAll = () => {
  return http.delete(`/member`);
};

const findByMem_Name = Mem_Name => {
  return http.get(`/member?Mem_Name=${Mem_Name}`);
};

const memberService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByMem_Name
};

export default memberService;
