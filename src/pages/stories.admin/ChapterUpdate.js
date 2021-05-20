import { useRef, useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import toChar from '../../utils/toChar'
import Editor from '../../global/CkEditor'
import { toggleLoading } from '../../redux/actions/web.actions'
import { updateChapter } from '../../services/chapters.services'
import { getAllStoriesAsync } from '../../redux/actions/stories.action'

const ChapterUpdate = ({ chapterUpdateForm, setChapterUpdateForm, setClientInfo }) => {
  const { info } = chapterUpdateForm
  const dispatch = useDispatch()

  const [content, setContent] = useState(info && info.content)
  const nameEl = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = nameEl.current.value.trim()
    const text = toChar(name)

    const data = {
      name, content, text
    }

    dispatch(toggleLoading(true))
    updateChapter(info._id, data)
      .then(res => {
        if (res.data && res.data.status) {
          setChapterUpdateForm({ status: false, info: {} })
          setClientInfo({ status: false, info: {} })
          dispatch(getAllStoriesAsync({}, true))
          dispatch(toggleLoading(false))
        } else {
          alert("Lỗi! " + res.data.message)
        }
      })
      .catch(err => {
        alert('Lỗi: ' + err)
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }

  return (
    <>
      {
        chapterUpdateForm.status &&
        <div style={{ zIndex: 2 }} id='client-create-chapter'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form'>
              <span onClick={() => { setChapterUpdateForm(false) }} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <div className='form-container'>
                <h4>Cập nhật Chapter</h4>
                <div className='create-name'>
                  <label htmlFor='create_name' style={{ fontWeight: 'bold' }}>Tên chapter: </label>
                  <input defaultValue={info && info.name} placeholder='VD: Chiếc nhẫn tình cờ' required ref={nameEl} id='create_name' name='major_name' />
                </div>
                <div className='create-desc'>
                  <Editor setContent={setContent} defaultContent={info && info.content} />
                </div>
                <button className='sm-btn' type='submit'>Thêm</button>
              </div>
            </form>
          </div>
        </div>
        ||
        null
      }
    </>
  )
}

export default ChapterUpdate