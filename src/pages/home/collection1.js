import { Link } from 'react-router-dom'

const Collection1 = () => {
  return (
    <div className='collection1'>
      <div className='collection1-container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-lx-3'>
            <div className='extra-item'>
              <span className='category'>Chinh thám</span>
              <Link to='/'>
                <div style={{ backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVxhnG8PgvP023RG3qQjFjrbf76NJBx-Kg&usqp=CAU'})` }} className='image-wrapper'>
                  <div className='title'>
                    <span>{'Thám tử Sherlock Holmes'}</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='extra-item'>
              <span className='category'>Chinh thám</span>
              <div style={{ backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVxhnG8PgvP023RG3qQjFjrbf76NJBx-Kg&usqp=CAU'})` }} className='image-wrapper'>
                <div className='title'>
                  <span>{'Thám tử Sherlock Holmes'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-lx-6' style={{ position: 'relative' }}>
            <div className='main-item'>
              <span className='category'>Chinh thám</span>
              <Link to='/'>
                <div style={{ backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVxhnG8PgvP023RG3qQjFjrbf76NJBx-Kg&usqp=CAU'})` }} className='image-wrapper'>
                  <div className='title'>
                    <span>{'Thám tử Sherlock Holmes'}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-lx-3'>
            <div className='extra-item'>
              <span className='category'>Chinh thám</span>
              <div style={{ backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVxhnG8PgvP023RG3qQjFjrbf76NJBx-Kg&usqp=CAU'})` }} className='image-wrapper'>
                <div className='title'>
                  <span>{'Thám tử Sherlock Holmes'}</span>
                </div>
              </div>
            </div>

            <div className='extra-item'>
              <span className='category'>Chinh thám</span>
              <div style={{ backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVxhnG8PgvP023RG3qQjFjrbf76NJBx-Kg&usqp=CAU'})` }} className='image-wrapper'>
                <div className='title'>
                  <span>{'Thám tử Sherlock Holmes'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Collection1