import axios from "axios";
import type { person } from "../components/persons";

const baseUrl = 'http://localhost:3001/persons'

function getAll() {
  return axios.get(baseUrl)
}

function create(newPersonObject:person | any) {
  return axios.get(baseUrl,newPersonObject)
}

function update(id:Pick<person,'id'>, newPersonObject: person | any) {
  return axios.put(`${baseUrl}/${id}`,newPersonObject)
}

export default {
  getAll,create,update
}