import axios, { AxiosRequestConfig } from 'axios'

export interface RequestConfig extends AxiosRequestConfig {
  option?: Option
}

interface Option {
  autoErrorHandle?: boolean
  autoLoading?: boolean
}

const DEFAULT_OPTION: Option = {
  autoErrorHandle: true,
  autoLoading: true,
}

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_TOUR,
  timeout: 30000,
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
axiosInstance.interceptors.request.use(
  config => {
    const reConfig = config as RequestConfig
    const { option = DEFAULT_OPTION } = reConfig
    reConfig.option = { ...DEFAULT_OPTION, ...option }
    return reConfig
  },
  error => {
    Promise.reject(error)
  }
)

// Response interceptors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const config: RequestConfig = error.config
    if (config.option?.autoErrorHandle) {
      //console.info(...getTag('INV', 'black', 'yellow'), error);
    }
    return Promise.reject(error)
  }
)

function getTag(tagName: string, color: string, bgColor: string): string[] {
  return [
    `%c${tagName}`,
    `color:${color};background-color:${bgColor};border-radius:4px;line-height:1;padding:${
      tagName.length === 3 ? '3px 10px 2px 9px' : '3px 6px 2px'
    }`,
  ]
}

function request<T>(config: RequestConfig) {
  return axiosInstance.request<T>(config).then(response => response.data)
}

function requestFullResponse<T>(config: RequestConfig) {
  return axiosInstance.request<T>(config)
}

export { request, requestFullResponse }
