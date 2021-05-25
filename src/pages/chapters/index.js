import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { toggleLoading } from "../../redux/actions/web.actions"
import { getOneChapter } from "../../services/chapters.services"
import { getAllChaptersAsync } from "../../redux/actions/chapters.actions"

const Chapter = () => {
  const { _id, chap, storyId } = useParams()
  const { chapters } = useSelector(state => state.chapters)
  const [next, setNext] = useState({})
  const [prev, setPrev] = useState({})
  
  const dispatch = useDispatch()
  const [chapter, setChapter] = useState({})
  const [currentIndex, setCurrentIndex] = useState(null)

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

  useEffect(() => {
    dispatch(getAllChaptersAsync({ story: storyId }, true))
  }, [dispatch, storyId])

  useEffect(() => {
    const tempIndex = chapters.findIndex(x => x._id === _id)
    setCurrentIndex(tempIndex)
    const tempPrev = tempIndex > 0 ? chapters[tempIndex - 1] : null
    const tempNext = tempIndex < (chapters.length - 1) ? chapters[tempIndex + 1] : null
    setPrev(tempPrev)
    setNext(tempNext)

  }, [chapters])

  return (
    <div className='chapter-detail'>
      <div className='container'>
        {
          prev &&
          <Link to={`/chapters/${storyId}/${prev && prev._id}/${currentIndex - 1}`}>Previous</Link>
        }
        {
          next &&
          <Link to={`/chapters/${storyId}/${next && next._id}/${currentIndex + 1}`}>Next</Link>
        }
        <h1 className='story'>{chapter.story && chapter.story.title}</h1>
        <h2 className='chap'>Chương {chap}: {chapter.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: chapter.content || 'updating...' }}>
        </div>
      </div>
    </div>
  )
}

export default Chapter