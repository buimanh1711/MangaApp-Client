import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllGuestsAsync, toggleLoading } from '../../redux/actions'
// import { createGuest } from '../../services/global'
import toChar from '../../utils/toChar'

const Create = ({ status, setCreateForm, setProduct }) => {
  const history = useHistory()

  const dispatch = useDispatch()

  const countries = []

  const nameEl = useRef(null)
  const idEl = useRef(null)
  const phoneEl = useRef(null)
  const emailEl = useRef(null)
  const addEl = useRef(null)
  const schoolEl = useRef(null)
  const dateEl = useRef(null)
  const sexEl = useRef(null)

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
    const id = idEl.current.value.trim()
    const phone = phoneEl.current.value
    const address = addEl.current.value.trim()
    const birth = dateEl.current.value.trim()
    const sex = sexEl.current.value.trim()
    const school = schoolEl.current.value !== 'Trường THPT' && JSON.parse(schoolEl.current.value) || null
    const text = toChar(name)

    const data = {
      fullName: name, cmnd: id, phone, school, sex, birth, address, text
    }

    console.log(data)
    // dispatch(toggleLoading(true))
    // createGuest(data)
    //   .then(res => {
    //     if (res.data && res.data.status) {
    //       setCreateForm(false)
    //       setProduct({ status: true, user: res.data.newGuest })
    //       dispatch({
    //         type: 'CREATE_GUEST',
    //         payload: res.data.newGuest
    //       })
    //     } else {
    //       alert(res.data.message)
    //     }
    //   })
    //   .catch(err => {
    //     alert(err)
    //   })
    //   .then(() => {
    //     dispatch(toggleLoading(false))
    //     dispatch(getAllGuestsAsync({}))
    //   })
  }

  return (
    <>
      {
        status &&
        <div id='client-create'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form'>
              <span onClick={() => { setCreateForm(false) }} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <div className='form-container'>
                <h4>Thêm truyện mới</h4>
                <div className='create-name'>
                  <label htmlFor='create_name'>Tên truyện: </label>
                  <input required ref={nameEl} id='create_name' />
                </div>
                <div className='create-id'>
                  <label htmlFor='create_id'>CMND: </label>
                  <input required ref={idEl} id='create_id' />
                </div>
                <div className='create-email'>
                  <label htmlFor='create_email'>Email: </label>
                  <input required ref={emailEl} id='create_email' />
                </div>
                <div className='create-phone'>
                  <label htmlFor='create_phone'>SĐT: </label>
                  <input type='number' required ref={phoneEl} id='create_phone' />
                </div>
                <div className='create-address'>
                  <label htmlFor='create_address'>Địa chỉ: </label>
                  <input required ref={addEl} id='create_phone' />
                </div>
                <div className='create-date'>
                  <label htmlFor='create_phone'>Ngày sinh: </label>
                  <input type='date' required ref={dateEl} id='create_phone' />
                </div>
                <div className='create-sex'>
                  <select ref={sexEl} required defaultValue='Giới tính' name="categories">
                    <option value="Giới tính" disabled hidden>Giới tính</option>
                    <option value={'Nam'}>
                      Nam
                    </option>
                    <option value='Nữ'>
                      Nữ
                    </option>
                  </select>
                </div>
                <div className='create-school'>
                  <select required defaultValue='Trường THPT' ref={schoolEl} name="categories">
                    <option value="Trường THPT" disabled hidden>Trường THPT</option>
                    {
                      countries && countries.length > 0 &&
                      countries.map(item =>
                        <option key={item.id} value={JSON.stringify(item)}>
                          {item.name}
                        </option>
                      )
                    }
                  </select>
                </div>
                <button type='submit'>Đăng ký</button>
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

export default Create