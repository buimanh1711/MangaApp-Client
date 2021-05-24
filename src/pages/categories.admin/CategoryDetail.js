const CategoryInfo = ({ productInfo, setProductInfo }) => {
  const { info } = productInfo

  return (
    <>
      {
        productInfo.status &&
        <div id='product-info'>
          <div className='product-info-container'>
            <div className='form'>
              <h4>Thông tin chuyên ngành</h4>
              <button onClick={() => setProductInfo({ status: false, info: {} })}>
                <i className="fas fa-times"></i>
              </button>
              <div className='content'>
                <h5>
                  Tên chuyên ngành: <strong>{info.name || 'Đang cập nhật...'}</strong>
                </h5>
                <h5>
                  Hệ đào tạo: <strong>{info.cert || 'Đang cập nhật...'}</strong>
                </h5>
                <h5>
                  Chỉ tiêu: <strong>{info.target || 'Đang cập nhật...'}</strong>
                </h5>
                <h5>
                  Năm đào tạo: <strong>{info.years || 'Đang cập nhật...'}</strong>
                </h5>
                <div className='description' dangerouslySetInnerHTML={{ __html: info.description }}>

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

export default CategoryInfo