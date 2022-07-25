import axios from 'axios'
import { useAuth } from 'src/hooks'

const headers = {
  'Content-Type': 'application/json'
}
const baseURL = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: `${baseURL}`,
  headers: headers
})
