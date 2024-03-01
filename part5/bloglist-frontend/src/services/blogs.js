import axios from "axios"
import { getJWT } from "../utils/jwt"

const baseUrl = "http://127.0.0.1:3000/api/blog"

export const getAll = async () => {
  const token = getJWT()
  const request = await axios.get(baseUrl,  { headers: { Authorization: `Bearer ${token}` } })
  console.log(request)
  return request

}


export const deleteBlog = async (id)=>{
  console.log(id)

  const token = getJWT()
  const request = await axios.delete(baseUrl+`/${id}`,  { headers: { Authorization: `Bearer ${token}` } })

  console.log(request)
  return request

}

export const createBlog = async (data) => {
  const token = getJWT()
  data.likes = Number(data.likes)

  const request = await axios.post(baseUrl,  data,{ headers: { Authorization: `Bearer ${token}` }})


  return request
}

export const editBlog = async (id, data) => {
  const token = getJWT()

  data.likes = Number(data.likes)

  const request = await axios.put(baseUrl+`/${id}`,  data,{ headers: { Authorization: `Bearer ${token}` }})

	return request
}

export const LikeBlog = async (id) => {
  const token = getJWT()
  const data = {}
  const request = await axios.patch(baseUrl+`/likes/${id}`, data, { headers: { Authorization: `Bearer ${token}` } })

  console.log("TOKEN:", token)

	return request
}