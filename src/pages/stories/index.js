import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import StoriesList from "../../global/List"
import { getAllStoriesAsync } from "../../redux/actions/stories.action"
import Filter from "./Filter"

const Stories = () => {
  const dispatch = useDispatch()
  const { stories } = useSelector(state => state.stories)

  useEffect(() => {
    dispatch(getAllStoriesAsync({}, true))
  }, [dispatch])

  return (
    <div id='stories'>
      <div className='container'>
        <div className='stories-container'>
          <Filter />
          <div style={{marginTop: 32}} className='stories-list-wrapper'>
          <StoriesList stories={stories} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories