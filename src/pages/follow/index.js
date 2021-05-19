import { useDispatch, useSelector } from "react-redux"
import StoriesList from "../../global/List"
import { useEffect } from "react"
import { getAllStoriesAsync } from "../../redux/actions/stories.action"
import Breadcrumb from "../../global/Breadcrumb"
import Pagination from "../../global/Pagination"

const FollowStories = () => {
  const { stories, storyPage } = useSelector(state => state.stories)
  const { user } = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllStoriesAsync({ userFollow: user._id }, true))
  }, [user, dispatch])

  const changePage = (page) => {
    dispatch(getAllStoriesAsync({ page: page, userFollow: user._id }, true))
  }

  return (
    <div id='latest'>
      <div className="container">
        <Breadcrumb category="Đang theo dõi" />
        <div className='latest-container'>
          <StoriesList stories={stories} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
          <Pagination totalPage={storyPage.totalPage} currentPage={storyPage.currentPage} changePage={changePage} />
        </div>
      </div>
    </div>
  )
}

export default FollowStories