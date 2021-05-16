import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../../global/Pagination'
import Warning from '../../global/Warning'

const ClientList = ({ setClientInfo, setUpdateForm, setProduct, setChapterCreateForm }) => {
  const { stories, storyPage } = useSelector(state => state.stories)

  const dispatch = useDispatch()

  const deleteGuest = (_id) => {
    // dispatch(removeGuestAsync(_id))
  }

  const changePage = (page) => {
    // dispatch(getAllGuestsAsync({ page }))
  }

  return (
    <div id='client-list'>
      <div className='client-list-container'>
        {
          stories && stories.length > 0 &&
          <ul>
            <li className='title-row'>
              <div className='info'>
                <span style={{ width: '40%' }}>Tên</span>
                <span style={{ width: '60%' }}>Số tập</span>
                <span style={{ width: '60%' }}>Hoàn thành</span>
              </div>
              <div className='tools'>
                <span>Thêm chap</span>
                <span>Sửa</span>
                <span>Xóa</span>
              </div>
            </li>
            {
              stories.map((item, index) => {
                if (index < 10) return (
                  <li key={item._id}>
                    <div className='info'>
                      <span className='name' onClick={() => setClientInfo({ status: true, info: item })}>
                        {item.title || 'Thám tử Conan'}
                      </span>
                      <span className='school'>{item.chapters && item.chapters.length || <strong style={{ color: 'red' }}>Chưa có truyện</strong>}</span>
                      <span className='school'>{item.isCompleted && 'X'|| '-'}</span>
                    </div>
                    <div className='tools'>
                      <button className='edit' onClick={() => setChapterCreateForm(true)}>
                        <i className="fas fa-pen-nib"></i>
                      </button>
                      <button className='edit' onClick={() => setUpdateForm({ status: true, info: item, index: index })}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button onClick={() => deleteGuest(item._id)} className='remove'>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          ||
          <Warning alert='Chưa có khách hàng nào!' />
        }
      </div>
      {
        storyPage.totalPage > 1 &&
        <div className='client-pagination'>
          <Pagination totalPage={storyPage.totalPage} currentPage={storyPage.currentPage} changePage={changePage} />
        </div>
      }
    </div>
  )
}

export default ClientList