import axios from "axios"
const baseUrl = "http://localhost:3000/api"

export const Login = async (data) => {
  let request = await axios.post(baseUrl + "/login", data)

  return request.data
}

