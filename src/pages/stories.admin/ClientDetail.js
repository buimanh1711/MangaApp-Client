import { useEffect } from 'react'
// import { toggleLoading, triggerNotif } from '../../redux/actions'
import { date } from '../../utils/getDate'
import Warning from '../../global/Warning'
import formatNumber from '../../utils/formatNum'

const ClientInfo = ({ clientInfo, setClientInfo }) => {

  const { info } = clientInfo
  const { bought } = info
  const boughtProduct = bought && bought.reduce((newArr = [], item) => {
    if (item && item.product) return [
      ...newArr,
      item
    ]
  }, [])

  console.log(bought, boughtProduct)
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
              <h4>Thông tin khách hàng</h4>
              <div className='form-container'>
                <div className='info'>
                  <div>
                    <strong>Họ tên:</strong><span>{info.fullName}</span>
                  </div>
                  <div>
                    <strong>Giới tính:</strong><span>{info.sex}</span>
                  </div>
                  <div>
                    <strong>Ngày sinh:</strong><span>{date(info.birth)}</span>
                  </div>
                  <div>
                    <strong>Trường THPT:</strong><span>{info.school && info.school.name}</span>
                  </div>
                  <div>
                    <strong>Địa chỉ:</strong><span>{info.address || 'Chưa cập nhật'}</span>
                  </div>
                  <div>
                    <strong>CMND:</strong><span>{info.cmnd}</span>
                  </div>
                  <div>
                    <strong>SĐT:</strong><span>{info.phone}</span>
                  </div>
                  <div>
                    <strong></strong>
                  </div>
                </div>
                <div className='products'>
                  <p><strong>Chuyên ngành đăng ký:</strong></p>
                  {
                    boughtProduct && boughtProduct.length > 0 &&
                    <ul className='scroll'>
                      <li className='title-row'>
                        <span className='count'>STT</span>
                        <span>Tên</span>
                        <span>Số năm</span>
                        <span>Chỉ tiêu</span>
                      </li>
                      {
                        boughtProduct.map((item, index) => {
                          if (item && item.product) {
                            return (
                              <li key={item.product._id}>
                                <span className='count'>{index + 1}</span>
                                <span>{item.product.name}</span>
                                <span>{formatNumber(item.product.years)}</span>
                                <span>{item.product.target}</span>
                              </li>
                            )
                          } else {
                            return null
                          }
                        })
                      }
                    </ul>
                    ||
                    <Warning alert='Chưa có chuyên ngành nào!' />
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