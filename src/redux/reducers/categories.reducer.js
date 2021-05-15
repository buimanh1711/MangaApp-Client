const initState = {
  categories: [],
  // totalcategories: 0,
  // chapterPage: {}
}

const categoriesReducer = (state = initState, action) => {
  const { payload, type } = action
  switch (type) {
    case "GET_ALL_ CATEGORIES": {
      return {
        ...state,
        categories: payload.categories,
      }
    }

    case "CREATE_ONE_CHAPTER": {
      const { categories } = state

      return {
        ...state,
        categories: [
          ...categories,
          payload
        ]
      }
    }

    case "UPDATE_ONE_CHAPTER": {
      const { categories } = state
      const { newChapter, index } = payload
      let newcategories = [
        ...categories.slice(0, index),
        newChapter,
        ...categories.slice(index + 1)
      ]

      return {
        ...state,
        categories: newcategories
      }
    }

    case "DELETE_ONE_STORY": {
      const { categories } = state
      let newcategories = categories.filter(x => x._id !== payload)

      return {
        ...state,
        categories: newcategories
      }
    }
  }

  return state
}

export default categoriesReducer