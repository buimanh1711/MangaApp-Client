const initState = {
  menu: [
    {
      title: "Trang chủ",
      path: "/",
    },
    {
      title: "Truyện",
      path: "/stories",
    },
    {
      title: "Thể loại",
      path: "/categories/:categoryId",
    },
    {
      title: "Sắp xếp",
      path: "/stories/:sort",
    },
    {
      title: "Theo dõi",
      path: "/follow",
    }
  ],
  loading: false,
}

const webReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case "TOGGLE_LOADING": {
      return {
        ...state,
        loading: payload
      }
    }

    case "TOGGLE_LOGIN": {
      return {
        ...state,
        login: payload
      }
    }
  }

  return state
}

export default webReducer