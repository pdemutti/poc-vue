const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: (process.env.NODE_ENV !== 'production') ? 'http://localhost:8085' : 'http://localhost:8085'
})

module.exports = axiosInstance
