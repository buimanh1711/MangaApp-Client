import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import StoriesList from '../../global/List'
import { getAllStoriesAsync } from '../../redux/actions/stories.action'
import Pagination from "../../global/Pagination"
import toEng from '../../utils/toEng'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Search = () => {
  const param = useQuery().get('q')
  const dispatch = useDispatch()
  const { stories, storyPage } = useSelector(state => state.stories)


  useEffect(() => {
    dispatch(getAllStoriesAsync({ search: toEng(param) }, true))
  }, [param])

  const changePage = (page) => {
    dispatch(getAllStoriesAsync({ page: page, search: param }, true))
  }

  return (
    <div id='search'>
      <div className='container'>
        <div className='query' style={{marginTop: 32}}>
          <div class="alert alert-primary" role="alert">
            {`Kết quả tìm kiếm cho '${param}':`}
          </div>
        </div>
        <div className='search-container'>
          <StoriesList stories={stories} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
          <Pagination totalPage={storyPage.totalPage} currentPage={storyPage.currentPage} changePage={changePage} />
        </div>
      </div>
    </div>
  )
}

export default Search
