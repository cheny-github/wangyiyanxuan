import requestMapper from '../request-mapper'
import apiConfig from './api.config'
import axiosInstance from './axios-instance'
export default requestMapper(apiConfig,axiosInstance)
