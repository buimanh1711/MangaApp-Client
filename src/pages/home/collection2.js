import { Link } from 'react-router-dom'
import getImage from '../../utils/getImage'

const Collection2 = (props) => {
  const arr = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <>
      <div id='latest'>
        <h1 className='latest-title'>
          Latest Posts
                </h1>
        <div className='posts-container'>
          {/* post 1 */}
          {
            arr && arr.length > 1 &&
            <div className='first-container'>
              <div className='first-thumb'>
                <Link to={`posts/`}>
                  <img src='https://laodongnhatban.com.vn/images/2018/12/28/7acd1f89-c39e-4381-a33e-3da33b39c6ac.jpg' alt='img' />
                </Link>
              </div>
              <div className='first-infor'>
                <Link to={`posts/`} className='first-category'>
                  Truyện tranh
                                </Link>
                <Link to='/' className='first-title'>
                  Truyện tranh manga hay
                                </Link>
                <p className='first-desc'>
                  Staring at the bottom of your glass
                                </p>
              </div>
            </div>
          }
          <div className='next-container'>
            <div className='row'>
              {/* next 3 */}
              {
                arr && arr.length > 4 &&
                arr.map((item, index) => {
                  if (index > 2 && index < 6) {
                    return (
                      <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
                        <div className='next-content'>
                          <div className='next-thumb'>
                            <Link to={`posts`}>
                              <img src='https://laodongnhatban.com.vn/images/2018/12/28/7acd1f89-c39e-4381-a33e-3da33b39c6ac.jpg' alt='img' />
                            </Link>
                          </div>
                          <div className='next-infor'>
                            <Link to={`posts`} className='next-title'>
                              Doraemon lac vao xu so cho meo
                                                        </Link>
                            <p className='next-desc'>
                              Doraemon lac vao xu so cho meo
                              Doraemon lac vao xu so cho meo
                            </p>
                            <Link to='/' className='next-category'>Truyen tranh</Link>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })
              }
              {
                arr && arr.length > 6 &&
                arr.map((item, index) => {
                  if (index > 4 && index < 7) {
                    return (
                      < div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                        <div className='next-content sec'>
                          <div className='next-thumb'>
                            <Link to={`posts`}>
                              <img src='https://laodongnhatban.com.vn/images/2018/12/28/7acd1f89-c39e-4381-a33e-3da33b39c6ac.jpg' alt='img' />
                            </Link>
                          </div>
                          <div className='next-infor'>
                            <Link to={`posts`} className='next-title'>
                              Doraemon lac vao xu so cho meo
                            </Link>
                            <p className='next-desc'>
                              Doraemon lac vao xu so cho meo
                              Doraemon lac vao xu so cho meo
                            </p>
                            <Link to='/' className='next-category'>Truyen tranh</Link>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
        <Link to='/' className='latest-seemore'>See more...</Link>
      </div>
    </>
  )
}

export default Collection2