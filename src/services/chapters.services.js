import request from '../utils/request'

export const createChapter = (data) => {
  return request('/chapters', 'POST', data)
}

export const updateChapter = (_id, data) => {
  return request(`/chapters/${_id}`, 'PUT', data)
}

export const deleteChapter = (_id, storyId) => {
  return request(`/chapters/${_id}/${storyId}`, 'DELETE')
}

export const getAllChapters = (query) => {
  const { story, sort, page, search } = query

  var url = `/chapters?page=${page || 1}&sort=${sort || 'createAt'}`
  if (story) url = url + `story=${story}&`
  if (search) url = url + `search=${search}&` 

  request(url, "GET")
}

