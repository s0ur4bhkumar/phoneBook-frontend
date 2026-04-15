import axios from "axios";
import type { person } from "../components/persons";

const baseUrl = "/api/contacts";

function getAll() {
  console.log("fetching persons");
  return axios.get(baseUrl);
}

async function create(newPersonObject: person) {
  await axios.post(baseUrl, newPersonObject);
  return getAll();
}

function remove(id: number | string) {
  axios.delete(`${baseUrl}/${id}`);
  return axios.get(baseUrl);
}

function update(id: Pick<person, "id">, newPersonObject: person) {
  return axios.put(`${baseUrl}/${id}`, newPersonObject);
}

export default {
  getAll,
  create,
  update,
  remove,
};
