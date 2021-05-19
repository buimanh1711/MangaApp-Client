import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { toggleLoading } from "../../redux/actions/web.actions"
import { getOneChapter } from "../../services/chapters.services"

const Chapter = () => {
  const { _id, chap } = useParams()
  const dispatch = useDispatch()
  const [chapter, setChapter] = useState({})

  useEffect(() => {
    dispatch(toggleLoading(true))
    getOneChapter(_id)
      .then(res => {
        if (res.data && res.data.status) {
          setChapter(res.data.chapter)
          dispatch(toggleLoading(false))
        } else {
          alert(res.data.message)
        }
      })
      .catch(err => alert('ERROR: ' + err))
      .then(() => dispatch(toggleLoading(false)))
  }, [_id])

  return (
    <div className='chapter-detail'>
      <div className='container'>
        <h1 className='story'>{chapter.story && chapter.story.title}</h1>
        <h2 className='chap'>Chương {chap}: {chapter.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: chapter.content || 'updating...' }}>
        </div>
      </div>
    </div>
  )
}

export default Chapter