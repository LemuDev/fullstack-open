import axios from "axios"
import { getJWT } from "../utils/jwt"

const baseUrl = "http://127.0.0.1:3000/api/blog"

export const getAll = async () => {
  const token = getJWT()
  const request = await axios.get(baseUrl,  { headers: { Authorization: `Bearer ${token}` } })
  console.log(request)
  return request
  
}

