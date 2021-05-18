import StoriesList from "../../global/List"
import Collection1 from "./Collection1"
import Collection2 from "./Collection2"

const Home = () => {
  return (
    <div id='home'>
      <div className='home-container'>
        <div className='container'>
          <Collection1 />
          <Collection2 />
          <StoriesList />
        </div>
      </div>
    </div>
  )
}

export default Home