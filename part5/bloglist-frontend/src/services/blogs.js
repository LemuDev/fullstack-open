import {axios} from 'axios'
const baseUrl = "baseUrl"

export const getAll = async () => {
  
  const request = await axios.get(baseUrl)
  return request
}

