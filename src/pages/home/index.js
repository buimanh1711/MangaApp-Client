import Collection1 from "./collection1"
import Collection2 from "./collection2"

const Home = () => {
  return (
    <div id='home'>
      <div className='home-container'>
        <div className='container'>
          <Collection1 />
          <Collection2 />
          <Collection1 />
        </div>
      </div>
    </div>
  )
}

export default Home