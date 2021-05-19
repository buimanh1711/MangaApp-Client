import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStoriesAsync } from "../../redux/actions/stories.action";
// import { getAllGuestsAsync } from "../../redux/actions";
import toChar from "../../utils/toChar";

const ClientMenu = ({ setCreateForm }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories)

  const [query, setQuery] = useState({});

  // const filerByCategory = (e) => {
  //   const value = e.target.value && JSON.parse(e.target.value);
  //   const { start, end } = value;
  //   setQuery({ ...query, start, end });

  //   // dispatch(getAllGuestsAsync({ ...query, start, end }));
  // };

  const filterByName = (e) => {
    const value = e.target.value;
    dispatch(getAllStoriesAsync({search: toChar(value)}))
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
              onChange={filterByName}
              id="name"
              placeholder="Nhập tên truyện..."
            />
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
