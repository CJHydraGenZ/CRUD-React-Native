import axios from 'axios'



const Get = () => {
  const result = axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return result
}