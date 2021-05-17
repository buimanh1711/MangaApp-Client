import ClientList from "./List"
import ClientMenu from "./Menu"
import Create from './Create'
import { useState, useEffect } from "react"
import ClientInfo from "./ClientDetail"
import ChapterCreate from "./ChapterCreate"
import Update from "./Update"
import Product from "./Product"
import { useDispatch } from "react-redux"
import ChapterUpdate from "./ChapterUpdate"
// import { getAllGuestsAsync } from "../../redux/actions"

const Client = () => {
  const dispatch = useDispatch()

  const [createForm, setCreateForm] = useState(false)
  const [chapterCreateForm, setChapterCreateForm] = useState({ status: false, info: {} })
  const [chapterUpdateForm, setChapterUpdateForm] = useState({ status: false, info: {} })
  const [clientInfo, setClientInfo] = useState({ status: false, info: {} })
  const [updateForm, setUpdateForm] = useState({ status: false, info: {}, index: 0 })
  const [product, setProduct] = useState({ status: false, user: null })

  useEffect(() => {
    dispatch({
      type: 'SET_TITLE',
      payload: 'Tuyển sinh'
    })

    // dispatch(getAllGuestsAsync({}, true))
  }, [])

  return (
    <div id='client-tab'>
      {/* <Product product={product} setProduct={setProduct} /> */}
      <Create setProduct={setProduct} status={createForm} setCreateForm={setCreateForm} />
      <ChapterCreate setProduct={setProduct} chapterCreateForm={chapterCreateForm} setChapterCreateForm={setChapterCreateForm} />
      <ChapterUpdate setClientInfo={setClientInfo} chapterUpdateForm={chapterUpdateForm} setChapterUpdateForm={setChapterUpdateForm} />
      <Update updateForm={updateForm} setUpdateForm={setUpdateForm} />
      <ClientInfo clientInfo={clientInfo} setClientInfo={setClientInfo} setChapterUpdateForm={setChapterUpdateForm} />
      <div className='client-container'>
        <ClientMenu setCreateForm={setCreateForm} />
        <ClientList setChapterCreateForm={setChapterCreateForm} setProduct={setProduct} setClientInfo={setClientInfo} setUpdateForm={setUpdateForm} />
      </div>
    </div>
  )
}

export default Client