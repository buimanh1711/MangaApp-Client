import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import { createProduct, updateGuest } from '../../services/global'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllGuestsAsync, toggleLoading, triggerNotif } from '../../redux/actions'
import toChar from '../../utils/toChar'
import { date } from '../../utils/getDate'

const Update = ({ updateForm, setUpdateForm }) => {
  const guests = []
  const countries = []
  const { info } = updateForm
  console.log(info.birth)
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

    let checkId = false
    guests.forEach(item => {
      if (item.cmnd == id && item._id !== info._id) {
        checkId = true
      }
    })

    if (checkId) return alert('CMND đã tồn tại')

    const data = {
      fullName: name, cmnd: id, phone, school, sex, birth, address, text
    }


    // dispatch(toggleLoading(true))
    // updateGuest(info._id, data)
    //   .then(res => {
    //     if (res.data && res.data.status) {
    //       dispatch({
    //         type: 'UPDATE_GUEST',
    //         payload: res.data.newGuest
    //       })
    //     } else {
    //       dispatch(triggerNotif({
    //         type: 'ERROR',
    //         content: res.data.message
    //       }))
    //     }
    //   })
    //   .catch(err => {
    //     dispatch(triggerNotif({
    //       type: 'ERROR',
    //       content: 'SERVER_ERROR!'
    //     }))
    //   })
    //   .then(() => {
    //     dispatch(toggleLoading(false))
    //     dispatch(getAllGuestsAsync({}))
    //     setUpdateForm({ status: false, info: {} })
    //   })
  }

  return (
    <>
      {
        updateForm.status &&
        <div id='client-create'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form'>
              <span onClick={() => { setUpdateForm({ status: false, info: {} }) }} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <div className='form-container'>
                <h4>Sửa thông tin khách hàng</h4>
                <div className='create-name'>
                  <label htmlFor='create_name'>Họ tên thí sinh: </label>
                  <input defaultValue={info.fullName} required ref={nameEl} id='create_name' name='name' />
                </div>
                <div className='create-id'>
                  <label htmlFor='create_id'>CMND: </label>
                  <input defaultValue={info.cmnd} required ref={idEl} id='create_id' />
                </div>
                <div className='create-email'>
                  <label htmlFor='create_email'>Email: </label>
                  <input defaultValue={info.email} required ref={emailEl} id='create_email' />
                </div>
                <div className='create-phone'>
                  <label htmlFor='create_phone'>SĐT: </label>
                  <input defaultValue={info.phone} type='number' required ref={phoneEl} id='create_phone' />
                </div>
                <div className='create-address'>
                  <label htmlFor='create_address'>Địa chỉ: </label>
                  <input defaultValue={info.address} required ref={addEl} id='create_phone' />
                </div>
                <div className='create-date'>
                  <label htmlFor='create_date'>Ngày sinh: </label>
                  <input defaultValue={info.birth} type='date' required ref={dateEl} id='create_date' />
                </div>
                <div className='create-sex'>
                  <select ref={sexEl} required defaultValue={info.sex} name="categories">
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
                  <select required defaultValue={info.school} ref={schoolEl} name="categories">
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
                <button type='submit'>Submit</button>
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