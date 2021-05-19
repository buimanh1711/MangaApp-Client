import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { toggleLoading } from "../../redux/actions/web.actions"
import { getOneStory } from "../../services/stories.services"
import MainInfo from "./MainInfo"

const DetailStory = () => {
  const { _id } = useParams()
  const [story, setStory] = useState({})
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(toggleLoading(true))
    getOneStory(_id)
      .then(res => {
        if (res.data && res.data.status) {
          setStory(res.data.story)
          dispatch(toggleLoading(false))
        } else {
          alert(res.data.message)
        }
      })
      .catch(err => alert('ERROR: ' + err))
      .then(() => dispatch(toggleLoading(false)))
  }, [])
  
  return (
    <div id='detail-story'>
      <div className='container'>
        <div className='detail-container'>
          <MainInfo storyInfo={story} />
        </div>
      </div>
    </div>
  )
}

export default DetailStory