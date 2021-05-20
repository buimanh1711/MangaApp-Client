import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStoriesAsync } from "../../redux/actions/stories.action";
// import { getAllGuestsAsync } from "../../redux/actions";
import toChar from "../../utils/toChar";

const ClientMenu = ({ setCreateForm }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories)

  const queryEl = useRef(null)
  // const filerByCategory = (e) => {
  //   const value = e.target.value && JSON.parse(e.target.value);
  //   const { start, end } = value;
  //   setQuery({ ...query, start, end });

  //   // dispatch(getAllGuestsAsync({ ...query, start, end }));
  // };

  const filterByName = (e) => {
    const query = toChar(queryEl.current.value)

    if (query.length > 0 && query !== '')
      dispatch(getAllStoriesAsync({ search: query }))
  }

  const filterAll = () => {
    dispatch(getAllStoriesAsync({}))
  }

  return (
    <div id="client-menu">
      <div className="client-menu-container">
        <ul>
          <li className="add">
            <button onClick={() => setCreateForm(true)}>
              <i className="fas fa-plus"></i>
              <span>Thêm truyện mới</span>
            </button>
          </li>
          <li className="name">
            <label htmlFor="name">Tên</label>
            <input
              id="name"
              ref={queryEl}
              placeholder="Nhập tên truyện..."
            />
            <button onClick={filterByName} style={{padding: '4px 8px', border: 'none'}}>Tìm kiếm</button>
            <button onClick={filterAll} style={{padding: '4px 8px', border: 'none', marginLeft: 12}}>Tất cả</button>
          </li>
          {/* <li className="id">
            <label htmlFor="id">CMND</label>
            <input
              onChange={filterByCmnd}
              id="id"
              placeholder="Nhập số cmnd..."
            />
          </li> */}
          {/* <li className="category">
            <select onChange={filerByCategory}>
              <option
                value={JSON.stringify({ start: null, end: null })}
                selected
              >
                Tất cả
              </option>
              {
                categories && categories.length > 0 &&
                categories.map(item =>
                  <option value={JSON.stringify(item)}>
                    {item.title}
                  </option>
                )
              }
            </select>
          </li> */}

        </ul>
      </div>
    </div>
  );
};

export default ClientMenu;
