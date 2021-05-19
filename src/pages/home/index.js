import { useDispatch, useSelector } from "react-redux"
import StoriesList from "../../global/List"
import Collection1 from "./Collection1"
import Collection2 from "./Collection2"
import { useEffect } from "react"
import { getAllStoriesAsync } from "../../redux/actions/stories.action"

const Home = () => {
  const { stories } = useSelector(state => state.stories)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllStoriesAsync({ sort: '-updatedAt' }, true))
  }, [dispatch])

  return (
    <div id='home'>
      <div className='home-container'>
        <div className='container'>
          <Collection1 />
          <Collection2 />
          <StoriesList stories={stories} />
        </div>
      </div>
    </div>
  )
}

export default Home