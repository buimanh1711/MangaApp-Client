const ProductMenu = ({ setCreateForm }) => {
  const login = true

  // const searchProduct = (e) => {
  //   const value = e.target.value
  //   // dispatch(getAllProductsAsync({ search: toChar(value) }))
  // }

  return (
    <div id='product-menu'>
      <div className='product-menu-container'>
        <ul>
          {
            login &&
            <li className='add'>
              <button onClick={() => setCreateForm(true)}>
                <i className="fas fa-plus"></i>
                <span>
                  Thêm chuyên mục mới
              </span>
              </button>
            </li>
          }
          {/* <li className='name'>
            <input onChange={searchProduct} id='name' placeholder='Tìm kiếm chuyên ngành...' />
            <button className='staff-search'>
              <i className="fas fa-search"></i>
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default ProductMenu