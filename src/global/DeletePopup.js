const DeletePopup = ({ action, closePopup, title, status, id }) => {
  return (
    <>
      {
        status &&
        <div id='delete-pop'>
          <span>{title}</span>
          <div>
            <button onClick={() => action(id)} className='delete'>
              Xóa
            </button>
            <button onClick={closePopup} className='edit'>
              Hủy
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default DeletePopup