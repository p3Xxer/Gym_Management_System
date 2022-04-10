import http from "../http-common";

const getAll = () => {
  return http.get("/member");
};

const get = id => {
  return http.get(`/member/${id}`);
};

const create = data => {
  return http.post("/member", data);
};

const update = (id, data) => {
  return http.put(`/member/${id}`, data);
};

const remove = id => {
  return http.delete(`/member/${id}`);
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
