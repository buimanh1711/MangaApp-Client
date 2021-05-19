import { Link } from 'react-router-dom'
import { useEffect } from "react"
import { getAllStoriesAsync } from "../../redux/actions/stories.action'
import { useDispatch, useSelector } from "react-redux"

const Collection2 = (props) => {
  const dispatch = useDispatch()

  const arr = [
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <div className='collection2'>
      <div className='collection2-container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
            <h4>Truyện mới cập nhật</h4>
            <div className='left-container'>
              <div className='row custom-gutter'>
                {
                  arr.map(() => (

                    <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 custom-gutter'>
                      <div className='item'>
                        <span className='category'>Chinh thám</span>
                        <div className='thumb'>
                          <Link to='/'>
                            <div className='image-wrapper'>
                              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVxhnG8PgvP023RG3qQjFjrbf76NJBx-Kg&usqp=CAU' />
                            </div>
                          </Link>
                        </div>
                        <div className='info'>
                          <Link to='/'>Thám tử Sherlock Holmes</Link>
                          <p>Chương 12</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <h4>Truyện hot</h4>
            <div className='right-container scroll'>
              <div className='row'>
                {
                  arr.map(() => (
                    <div className='item'>
                      <div className="thumb">
                        <Link to='/'>
                          <div className='image-wrapper'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVxhnG8PgvP023RG3qQjFjrbf76NJBx-Kg&usqp=CAU' />
                          </div>
                        </Link>
                      </div>
                      <div className='info'>
                        <Link to=''>
                          Thám tử Sherlock Holmes
                        </Link>
                        <p>#Chinh thám</p>
                      </div>

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection2