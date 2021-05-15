export const getAllCategories = (query) => {
  const { page, search } = query || {}
  let url = `/products?page=${page || 1}&`

  if (search) {
    url = url + `search=${search}`
  }

  return request(url, 'GET')
}

export const createCategory = (data) => {
  return request('/products', 'POST', data)
}