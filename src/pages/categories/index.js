import { useSelector } from "react-redux"
import CategoryItems from "./CategoryItems"
import Breadcrumb from '../../global/Breadcrumb'

const Categories = () => {

  const { categories } = useSelector(state => state.categories)
  
  return (
    <div id='categories'>
      <div class='container'>
        <Breadcrumb category="Thể loại" />
        {
          categories && categories.length > 0 &&
          categories.map(item => (
            <div className="category-container">
              <CategoryItems category={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories