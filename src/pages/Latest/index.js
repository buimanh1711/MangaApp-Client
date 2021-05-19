import { useDispatch, useSelector } from "react-redux"
import StoriesList from "../../global/List"
import { useEffect } from "react"
import { getAllStoriesAsync } from "../../redux/actions/stories.action"

const LatestStories = () => {
  const { stories } = useSelector(state => state.stories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllStoriesAsync({ sort: '-updatedAt' }, true))
  }, [dispatch])

  return (
    <div id='latest'>
      <div className="container">
        <div className='latest-container'>
          <StoriesList stories={stories} />

        </div>
      </div>
    </div>
  )
}

export default LatestStories