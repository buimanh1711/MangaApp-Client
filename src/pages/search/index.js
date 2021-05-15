import { useLocation } from 'react-router-dom'
import StoriesList from '../../global/List'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Search = () => {
  const param = useQuery().get('q')

  return (
    <div id='search'>
      <div className='container'>
        <div className='query' style={{marginTop: 32}}>
          <div class="alert alert-primary" role="alert">
            {`Kết quả tìm kiếm cho '${param}':`}
          </div>
        </div>
        <div className='search-container'>
          <StoriesList />
        </div>
      </div>
    </div>
  )
}

export default Search
