import { request, requestFullResponse } from '@/utils/request'
import { Category } from '@/model/about/category'

export const getCategory = (categoryId: string) => {
  return requestFullResponse<Category>({
    method: 'get',
    baseURL: process.env.VUE_APP_API_TOUR,
    url: `/categories/${categoryId}`,
  }).then(response => {
    // something like console.log(response.statusText) ...
    return response.data
  })
}

export const getCategories = () => {
  return request<Category[]>({
    method: 'get',
    baseURL: process.env.VUE_APP_API_TOUR,
    url: `/categories`,
  })
}

export const deleteCategory = (categoryId: string) => {
  return request({
    method: 'delete',
    baseURL: process.env.VUE_APP_API_TOUR,
    url: `/categories/${categoryId}`,
    option: { autoErrorHandle: true },
  })
}
