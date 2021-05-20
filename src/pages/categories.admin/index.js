import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
// import { getAllProductsAsync } from "../../redux/actions/"
import Create from "./Create"
import ProductList from "./List"
import ProductMenu from "./Menu"
import ProductInfo from "./ProductDetail"
import Update from "./Update"

const Product = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SET_TITLE',
      payload: 'Chuyên ngành'
    })
    
    // dispatch(getAllProductsAsync({}, true))
  }, [])

  const [createForm, setCreateForm] = useState(false)

  return (
    <div id='product-tab'>
      <Create status={createForm} setCreateForm={setCreateForm} />
      <div className='product-container'>
        <ProductMenu setCreateForm={setCreateForm} />
        <ProductList />
      </div>
    </div>
  )
}

export default Product