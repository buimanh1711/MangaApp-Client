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
  adminMenu: [
    {
      title: "Quản lý truyện",
      path: "/admin/stories",
      icon: <i className="fas fa-graduation-cap"></i>,
    },
    {
      title: "Quản lý chuyên mục",
      path: "/admin/categories",
      icon: <i className="fas fa-user-md"></i>
    },
    {
      title: "Thông tin",
      path: "/admin/about",
      icon: <i className="fas fa-info"></i>,
    },
  ],
  loading: false,
  adminTitle: ''
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