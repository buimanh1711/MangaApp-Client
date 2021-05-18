import { useSelector } from "react-redux"
import StoriesList from "../../global/List"
import Collection1 from "./Collection1"
import Collection2 from "./Collection2"

const Home = () => {
  const { stories } = useSelector(state => state.stories)
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