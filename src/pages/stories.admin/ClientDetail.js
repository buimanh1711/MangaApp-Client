import { useEffect, useState } from 'react'
import { date } from '../../utils/getDate'
import Warning from '../../global/Warning'
import formatNumber from '../../utils/formatNum'
import { getOneStory } from '../../services/stories.services'
import { useDispatch } from 'react-redux'
import { toggleLoading } from '../../redux/actions/web.actions'
import { deleteChapter } from '../../services/chapters.services'
import { getAllStoriesAsync } from '../../redux/actions/stories.action'

const ClientInfo = ({ clientInfo, setClientInfo, setChapterUpdateForm }) => {
  const dispatch = useDispatch()
  const { info } = clientInfo
  const [story, setStory] = useState({})

  useEffect(() => {
    if (info._id) {
      dispatch(toggleLoading(true))
      getOneStory(info._id)
        .then(res => {
          if (res.data && res.data.status) {
            dispatch(toggleLoading(false))
            setStory(res.data.story)
          } else {
            alert('Lỗi: ' + res.data.message)
          }
        })
        .catch(err => alert(err))
        .then(() => {
          dispatch(toggleLoading(false))
        })
    }
  }, [info])

  const removeChapter = (_id, storyId) => {
    dispatch(toggleLoading(true))
    deleteChapter(_id, storyId)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(getAllStoriesAsync({}, true))
          alert('Xóa thành công!')
        } else {
          alert('Lỗi: ' + res.data.message)
        }
      })
      .catch(err => alert(err))
      .then(() => {
        dispatch(toggleLoading(false))
        getOneStory(info._id)
          .then(res => {
            if (res.data && res.data.status) {
              setStory(res.data.story)
            } else {
              alert('Lỗi: ' + res.data.message)
            }
          })
          .catch(err => alert(err))
          .then(() => {
            dispatch(toggleLoading(false))
          })
      })
  }

  const close = () => {
    setClientInfo({ status: false, info: {} })
  }

  return (
    <>
      {
        clientInfo.status &&
        <div id='client-client-info'>
          <div className='client-info-container'>
            <div className='form'>
              <button onClick={close}>
                <i className="fas fa-times"></i>
              </button>
              <h4>Thông tin truyện</h4>
              <div className='form-container'>
                <div className='info'>
                  <div>
                    <strong>Tên:</strong><span>{story.title || '...'}</span>
                  </div>
                  <div>
                    <strong>Thể loại:</strong><span>
                      {
                        story.categories && story.categories.map((item, index) => <i>{index > 0 ? `, ${item.category.title}` : `${item.category.title}`}</i>)
                      }
                    </span>
                  </div>
                  <div>
                    <strong>Hoàn thành:</strong><span>{story.isCompleted && "X" || '-'}</span>
                  </div>
                  <div>
                    <strong>Mô tả:</strong><span>{story.shortDescription || '...'}</span>
                  </div>
                </div>
                <div className='products'>
                  <p><strong>Chương:</strong></p>
                  {
                    story.chapters && story.chapters.length > 0 &&
                    <ul className='scroll'>
                      <li className='title-row'>
                        <span className='count'>STT</span>
                        <span>Tên</span>
                        <span>Ngày tạo</span>
                        <span>Tác vụ</span>
                      </li>
                      {
                        story.chapters.map((item, index) => {
                          console.log(item)
                          if (item && item.chapter) {
                            return (
                              <li key={item.chapter._id}>
                                <span className='count'>{index + 1}</span>
                                <span>{item.chapter.name}</span>
                                <span>{date(item.chapter.createdAt)}</span>
                                <span style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                  <i onClick={() => { setChapterUpdateForm({ status: true, info: item.chapter }) }} style={{ color: 'blue', cursor: 'pointer' }} className="fas fa-edit"></i>
                                  <i onClick={() => removeChapter(item.chapter._id, story._id)} style={{ color: 'red', cursor: 'pointer' }} className="far fa-trash-alt"></i>
                                </span>
                              </li>
                            )
                          } else {
                            return null
                          }
                        })
                      }
                    </ul>
                    ||
                    <Warning alert='Chưa có chương nào!' />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        ||
        null
      }
    </>
  )
}

export default ClientInfo