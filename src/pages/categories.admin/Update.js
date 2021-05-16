import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { toggleLoading } from '../../redux/actions'
// import { updateProduct } from '../../services/global'
import toChar from '../../utils/toChar'
import Editor from '../../global/CkEditor'

const Update = ({ updateForm, setUpdateForm }) => {
  const history = useHistory()

  const dispatch = useDispatch()
  const { info } = updateForm
  console.log(info)
  const [description, setDescription] = useState(null)
  const nameEl = useRef(null)
  const yearsEl = useRef(null)
  const targetEl = useRef(null)
  const blockEl = useRef(null)
  const certEl = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = nameEl.current.value.trim()
    const years = yearsEl.current.value
    const text = toChar(name)
    const target = targetEl.current.value
    const cert = certEl.current.value

    const data = {
      name, description: description || info.description , years, text, target, cert
    }

    // dispatch(toggleLoading(true))
    // updateProduct(info._id, data)
    //   .then(res => {
    //     if (res.data && res.data.status) {
    //       dispatch({
    //         type: 'UPDATE_PRODUCT',
    //         payload: { ...res.data.newProduct, ...data }
    //       })
    //     } else {
    //       alert('Chuyên ngành đã tồn tại')
    //     }
    //   })
    //   .catch(err => {
    //     alert('Lỗi: ' + err)
    //   })
    //   .then(() => {
    //     dispatch(toggleLoading(false))
    //     setUpdateForm({ status: false, updateForm: {} })
    //   })
  }

  return (
    <>
      {
        updateForm.status &&
        <div key={info._id} id='product-create'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form scroll'>
              <span onClick={() => { setUpdateForm({ status: false, info: {} }) }} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <div className='form-container'>
                <h4>Sửa chuyên ngành</h4>
                <div className='create-name'>
                  <label htmlFor='create_name'>Tên chuyên ngành: </label>
                  <input defaultValue={info.name} required ref={nameEl} id='create_name' />
                </div>
                <div className='create-year'>
                  <label htmlFor='create_year'>Số năm: </label>
                  <input required ref={yearsEl} defaultValue={info.years} id='create_year' type='number' min={1} />
                </div>
                <div className='create-year'>
                  <label htmlFor='create_year'>Chỉ tiêu: </label>
                  <input required ref={targetEl} defaultValue={info.target} id='create_year' type='number' min={1} />
                </div>
                <div className='create-year'>
                  <label htmlFor='create_year'>Khối: </label>
                  <input required ref={blockEl} defaultValue={info.block} id='create_block' placeholder='VD: A01, D01...' min={1} />
                </div>
                <div className='create-cert'>
                  <select ref={certEl} required defaultValue={info.cert} name="categories">
                    <option value="Bằng đào tạo" disabled hidden>Bằng đào tạo</option>
                    <option value={'Cao đẳng'}>
                      Cao đẳng
                  </option>
                    <option value={'Cử nhân'}>
                      Cử nhân
                  </option>
                    <option value='Kĩ sư'>
                      Kĩ sư
                  </option>
                    <option value='Thạc sĩ'>
                      Thạc sĩ
                  </option>
                  </select>
                </div>
                <div className='create-desc'>
                  <Editor setDescription={setDescription} defaultDescription={info.description} />
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

export default Update