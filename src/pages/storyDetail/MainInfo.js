import { createElement } from "react"

const MainInfo = ({ storyInfo }) => {
  return (
    <div className='main-info'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <div className='thumb'>
            <img src={storyInfo?.image?.url || '/images/product_default_img.png'} />
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <div className='info'>
            <h1>{storyInfo?.title}</h1>
            <ul>
              <li className='title'><i className="fas fa-filter"></i> <strong>Thể loại:</strong> </li>
              {
                storyInfo?.categories && storyInfo.categories.length > 0 &&
                storyInfo.categories.map(item => (
                  <>
                  {
                    createElement
                  }
                  <li className='cate'>#Chinh thám</li>
                  </>
                ))
              }
            </ul>
            <p><i className="fas fa-toggle-on"></i> <strong>Trạng thái:</strong> Chưa hoàn thành</p>
            <p><i className="fas fa-clock"></i> <strong>Cập nhật:</strong> 17/11/2021</p>
            <button><i class="fas fa-heart"></i> Theo dõi</button>
            <p className='description'>Sherlock Holmes là bộ tiểu thuyết được nhà văn Author Conan Doylce viết vào cuối thế kỉ 19, bao gồm nhiều đoản thiên và truyện ngắn. Với các tình tiết li kì, hấp dẫn, Holmes sẽ đưa người đọc cuốn vào những vụ án, những tư duy logic của mình. Hãy tận hưởng...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo