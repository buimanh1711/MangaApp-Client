import { useDispatch, useSelector } from "react-redux"
import StoriesList from "../../global/List"
import { useEffect } from "react"
import { getAllStoriesAsync } from "../../redux/actions/stories.action"
import Breadcrumb from "../../global/Breadcrumb"

const FollowStories = () => {
  const { stories } = useSelector(state => state.stories)
  const { user } = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllStoriesAsync({ userFollow: user._id }, true))
  }, [user, dispatch])

  return (
    <div id='latest'>
      <div className="container">
        <Breadcrumb category="Đang theo dõi" />
        <div className='latest-container'>
          <StoriesList stories={stories} />
        </div>
      </div>
    </div>
  )
}

export default FollowStories