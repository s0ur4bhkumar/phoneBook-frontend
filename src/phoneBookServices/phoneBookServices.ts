import axios from "axios";
import type { person } from "../components/persons";

const baseUrl = "/api/contacts";

function getAll() {
  console.log("fetching persons");
  return axios.get(baseUrl);
}

function create(newPersonObject: person) {
  return axios.post(baseUrl, newPersonObject);
}

function remove(id: number | string) {
  return axios.delete(`${baseUrl}/${id}`);
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
