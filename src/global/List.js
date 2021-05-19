import { Link } from "react-router-dom"
import Warning from "./Warning"

const StoriesList = ({ stories }) => {
  return (
    <div id='stories-list'>
      <div className='stories-list-container'>
        <div className='row custom-gutter'>
          {
            stories && stories.length > 0 && stories.map(item => (
              <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2 custom-gutter'>
                <div className='item-container'>
                  <span className='category'>{item.categories && (item.categories.length > 0 && item.categories[0].category) && item.categories[0].category.title || '...'}</span>
                  <div className='thumb'>
                    <Link>
                      <img src={item.image && item.image.url || '/images/product_default_img.png'} />
                    </Link>
                  </div>
                  <div className='info'>
                    <Link>{item.title || 'Chưa cập nhật!'}</Link>
                    <p>
                      125 Chương
                      </p>
                  </div>
                </div>
              </div>
            ))
            ||
            <Warning alert='Không có truyện!' />
          }
        </div>
      </div>
    </div>
  )
}

export default StoriesList