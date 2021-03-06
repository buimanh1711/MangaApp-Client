import request from '../utils/request'

export const getAllStories = (query) => {
  const { categories, sort, page, search, userFollow } = query

  var url = `/stories?page=${page || 1}&sort=${sort || 'createdAt'}&`
  if (categories) url = url + `categories=${categories}&`
  if (search) url = url + `search=${search}&`
  if (userFollow) url = url + `userFollow=${userFollow}&`

  return request(url, "GET")
}

export const getOneStory = (_id) => {
  return request(`/stories/${_id}`, 'GET')
}

export const createStory = (data) => {
  return request('/stories', 'POST', data)
}

export const updateStory = (_id, data) => {
  return request(`/stories/${_id}`, 'PUT', data)
}

export const deleteStory = (_id) => {
  return request(`/stories/${_id}`, 'DELETE')
}

export const commentStory = (_id, authorId, content ) => {
  return request(`/stories/${_id}/comment`, 'PUT', { authorId, content } )
}

export const followStory = (_id, authorId ) => {
  return request(`/stories/${_id}/follow`, 'PUT', { authorId } )
}