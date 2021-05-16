import { useRef, useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllProductsAsync, toggleLoading } from '../../redux/actions'
// import { createProduct } from '../../services/global'
import toChar from '../../utils/toChar'
import Editor from '../../global/CkEditor'

const ChapterCreate = ({ status, setChapterCreateForm }) => {
  const history = useHistory()

  const dispatch = useDispatch()

  const [description, setDescription] = useState('Đang cập nhật')
  const nameEl = useRef(null)
  const yearsEl = useRef(null)
  const targetEl = useRef(null)
  const blockEl = useRef(null)
  const certEl = useRef(null)


  useEffect(() => {
    // if (!login) {
    //   setTimeout(() => {
    //     history.replace('/login')
    //   }, 1000)
    // }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()

    const name = nameEl.current.value.trim()
    const years = yearsEl.current.value
    const target = targetEl.current.value
    const block = blockEl.current.value.trim()
    const cert = certEl.current.value
    const text = toChar(name)

    const data = {
      name, description, years, text, target, cert, block
    }

    // dispatch(toggleLoading(true))
    // createProduct(data)
    //   .then(res => {
    //     if (res.data && res.data.status) {
    //       setChapterCreateForm(false)

    //       dispatch({
    //         type: 'CREATE_PRODUCT',
    //         payload: {
    //           ...res.data.newProduct,
    //         }
    //       })
    //     } else {
    //       alert("Lỗi! " + res.data.message)
    //     }
    //   })
    //   .catch(err => {
    //     alert('Lỗi: ' + err)
    //   })
    //   .then(() => {
    //     // dispatch(toggleLoading(false))
    //     // dispatch(getAllProductsAsync({}))
    //   })
  }

  return (
    <>
      {
        !status &&
        <div id='client-create-chapter'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form'>
              <span onClick={() => { setChapterCreateForm(false) }} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <div className='form-container'>
                <h4>Thêm Chapter</h4>
                <div className='create-name'>
                  <label htmlFor='create_name' style={{fontWeight: 'bold'}}>Tên chapter: </label>
                  <input placeholder='VD: Khoa học máy tính' required ref={nameEl} id='create_name' name='major_name' />
                </div>
                <div className='create-desc'>
                  <Editor setDescription={setDescription} />
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

export default ChapterCreate