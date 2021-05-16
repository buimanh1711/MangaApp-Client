import request from '../utils/request'

export const getAllCategories = (query) => {
  const { page, search } = query || {}
  let url = `/categories?page=${page || 1}&`

  if (search) {
    url = url + `search=${search}`
  }

  return request(url, 'GET')
}

export const createCategory = (data) => {
  return request('/categories', 'POST', data)
}