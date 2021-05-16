import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../../global/Pagination'
import Warning from '../../global/Warning'
// import { getAllProductsAsync, removeProductAsync } from '../../redux/actions'

const ProductList = ({ setClientInfo, setUpdateForm, setProductInfo }) => {
  const products = []
  const productPage = {}
  const login = true

  const dispatch = useDispatch()

  const deleteProduct = (_id) => {
    // dispatch(removeProductAsync(_id))
  }

  const changePage = (page) => {
    // dispatch(getAllProductsAsync({ page }))
  }

  return (
    <div id='product-list'>
      <div className='product-list-container'>
        {
          products && products.length > 0 &&
          <ul>
            <li className='title-row'>
              <div className='count'>
                <span>STT</span>
              </div>
              <div className='info'>
                <span>Tên</span>
                <span>Số năm</span>
                <span>Chỉ tiêu</span>
              </div>
              <div className='tools'>
                {
                  login &&
                  <>
                    <span>Sửa</span>
                    <span>Xóa</span>
                  </>
                  ||
                  <span style={{ textAlign: 'center' }}>
                    Văn bằng
                  </span>
                }
              </div>
            </li>
            {
              products.map((item, index) => {
                if (index < 10) return (
                  <li key={item._id}>
                    <div className='count'>
                      <span>{index + 1}</span>
                    </div>
                    <div className='info'>
                      <span className='name' onClick={() => setProductInfo({ status: true, info: item })}>
                        {item.name}
                      </span>
                      <span style={{ fontWeight: 'bold' }}>{item.years || <strong style={{ color: 'red' }}>Chưa cập nhật</strong>}</span>
                      <span>{item.target || <strong style={{ color: 'red' }}>Chưa cập nhật</strong>}</span>
                    </div>
                    <div className='tools'>
                      {
                        login &&
                        <>
                          <button className='edit' onClick={() => setUpdateForm({ status: true, info: item })}>
                            <i className="fas fa-edit"></i>
                          </button>
                          <button onClick={() => deleteProduct(item._id)} className='remove'>
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </>
                        ||
                        <span style={{ textAlign: 'center' }}>
                          {item.cert}
                        </span>
                      }

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