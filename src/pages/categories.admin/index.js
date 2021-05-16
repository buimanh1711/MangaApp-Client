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
  const [updateForm, setUpdateForm] = useState({ status: false, info: {} })
  const [productInfo, setProductInfo] = useState({status: false, info: {}})

  return (
    <div id='product-tab'>
      <Create status={createForm} setCreateForm={setCreateForm} />
      <Update updateForm={updateForm} setUpdateForm={setUpdateForm} />
      <ProductInfo productInfo={productInfo} setProductInfo={setProductInfo} />
      <div className='product-container'>
        <ProductMenu setCreateForm={setCreateForm} />
        <ProductList setUpdateForm={setUpdateForm} setProductInfo={setProductInfo} />
      </div>
    </div>
  )
}

export default Product