import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../../global/Pagination'
import Warning from '../../global/Warning'
import { removeCategoryAsync } from '../../redux/actions/categories.actions'

const ProductList = () => {
  const categories = useSelector(state => state.categories.categories)
  const productPage = {}
  const dispatch = useDispatch()

  const deleteCategory = (_id) => {
    dispatch(removeCategoryAsync(_id))
  }

  const changePage = (page) => {
    // dispatch(getAllProductsAsync({ page }))
  }

  return (
    <div id='product-list'>
      <div className='product-list-container'>
        {
          categories && categories.length > 0 &&
          <ul>
            <li className='title-row'>
              <div className='count'>
                <span>STT</span>
              </div>
              <div className='info'>
                <span>Tên</span>
              </div>
              <div className='tools'>
                <span hidden>Sửa</span>
                <span>Xóa</span>
              </div>
            </li>
            {
              categories.map((item, index) => {
                if (index < 10) return (
                  <li key={item._id}>
                    <div className='count'>
                      <span>{index + 1}</span>
                    </div>
                    <div className='info'>
                      <span className='name'>
                        {item.title}
                      </span>
                    </div>
                    <div className='tools'>
                      <button hidden className='edit'>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button onClick={() => deleteCategory(item._id)} className='remove'>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          ||
          <Warning alert='Chưa có chuyên mục!' />
        }
      </div>
      <div className='client-pagination'>
        <Pagination totalPage={productPage.totalPage} currentPage={productPage.currentPage} changePage={changePage} />
      </div>
    </div>
  )
}

export default ProductList