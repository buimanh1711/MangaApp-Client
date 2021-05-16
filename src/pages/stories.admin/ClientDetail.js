import { useEffect } from 'react'
// import { toggleLoading, triggerNotif } from '../../redux/actions'
import { date } from '../../utils/getDate'
import Warning from '../../global/Warning'
import formatNumber from '../../utils/formatNum'

const ClientInfo = ({ clientInfo, setClientInfo }) => {

  const { info } = clientInfo
  const { chapters } = info

  useEffect(() => {
    // if (!login) {
    //   setTimeout(() => {
    //     history.replace('/login')
    //   }, 1000)
    // }
  }, [])

  const close = () => {
    setClientInfo({ status: false, info: {} })
  }

  return (
    <>
      {
        clientInfo.status &&
        <div id='client-client-info'>
          <div className='client-info-container'>
            <div className='form'>
              <button onClick={close}>
                <i className="fas fa-times"></i>
              </button>
              <h4>Thông tin truyện</h4>
              <div className='form-container'>
                <div className='info'>
                  <div>
                    <strong>Tên:</strong><span>{info.title || '...'}</span>
                  </div>
                  <div>
                    <strong>Thể loại:</strong><span>
                      {
                        info.categories && info.categories.map((item, index) => <i>{index > 0 ? `, ${item.category.title}` : `${item.category.title}`}</i>)
                      }
                    </span>
                  </div>
                  <div>
                    <strong>Hoàn thành:</strong><span>{info.isCompleted && "X" || '-'}</span>
                  </div>
                  <div>
                    <strong>Mô tả:</strong><span>{info.shortDescription || '...'}</span>
                  </div>
                </div>
                <div className='products'>
                  <p><strong>Chương:</strong></p>
                  {
                    chapters && chapters.length > 0 &&
                    <ul className='scroll'>
                      <li className='title-row'>
                        <span className='count'>STT</span>
                        <span>Tên</span>
                        <span>Số năm</span>
                        <span>Chỉ tiêu</span>
                      </li>
                      {
                        chapters.map((item, index) => {
                          if (item && item.product) {
                            return (
                              <li key={item.chapter._id}>
                                <span className='count'>{index + 1}</span>
                                <span>{item.chapter.name}</span>
                                <span>{formatNumber(item.chapter.years)}</span>
                                <span>{item.chapter.target}</span>
                              </li>
                            )
                          } else {
                            return null
                          }
                        })
                      }
                    </ul>
                    ||
                    <Warning alert='Chưa có chương nào!' />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        ||
        null
      }
    </>
  )
}

export default ClientInfo