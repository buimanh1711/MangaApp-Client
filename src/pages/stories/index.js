import StoriesList from "../../global/List"
import Filter from "./Filter"

const Stories = () => {
  const arr = [1, 2, 3,1,1,1,1,1,1,1,11]
  return (
    <div id='stories'>
      <div className='container'>
        <div className='stories-container'>
          <Filter />
          <StoriesList />
        </div>
      </div>
    </div>
  )
}

export default Stories