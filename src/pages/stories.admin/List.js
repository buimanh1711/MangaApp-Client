import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../../global/Pagination'
import Warning from '../../global/Warning'
import { getAllStoriesAsync, removeStoryAsync, updateStoryAsync } from '../../redux/actions/stories.action'

const ClientList = ({ setClientInfo, setUpdateForm, setProduct, setChapterCreateForm }) => {
  const { stories, storyPage } = useSelector(state => state.stories)

  const dispatch = useDispatch()

  const deleteStory = (_id) => {
    dispatch(removeStoryAsync(_id))
  }

  const completeStory = (_id, item, index) => {
    dispatch(updateStoryAsync(_id, { ...item, isCompleted: true }, index))
  }

  const changePage = (page) => {
    dispatch(getAllStoriesAsync({ page }))
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
                <span style={{ width: '60%' }}>Theo dõi</span>
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
                return (
                  <li key={item._id}>
                    <div className='info'>
                      <span className='name' onClick={() => setClientInfo({ status: true, info: item })}>
                        {item.title || 'Thám tử Conan'}
                      </span>
                      <span className='school'><strong style={{ color: 'red' }}>{item.chapters && item.chapters.length || 0}</strong></span>
                      <span className='school'><strong style={{ color: 'red' }}>{item.follows && item.follows.length || 0}</strong></span>
                      <span className='school'>{!item.isCompleted && <i onClick={() => completeStory(item._id, item, index)} className="fas fa-check-circle"></i> || <i className="far fa-check-circle"></i>}</span>
                    </div>
                    <div className='tools'>
                      <button className='edit' onClick={() => setChapterCreateForm({ status: true, info: item })}>
                        <i className="fas fa-pen-nib"></i>
                      </button>
                      <button className='edit' onClick={() => setUpdateForm({ status: true, info: item, index: index })}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button onClick={() => deleteStory(item._id)} className='remove'>
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