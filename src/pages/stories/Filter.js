import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Filter = () => {

  return (
    <>
      <div id='filter'>
        <div className='filter-container'>
          <i className="fas fa-filter"></i>
          <ul className='filter-list'>
            <li className={'filter-item active'}>All</li>
            <li className={'filter-item active'}>
              Categories
              {
                <ul className='filter-menu'>
                  <li>truyện tranh</li>
                  <li>truyện tranh</li>
                  <li>truyện tranh</li>
                  <li>truyện tranh</li>
                  <li>truyện tranh</li>
                </ul>
              }
            </li>
            <li className={'filter-item active'}>Date
              <ul className='filter-menu'>
                <li>Latest</li>
                <li>Earliest</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='filter-tag-container'>
          <span>Filter by: </span>
          <div className='filter-tags'>
            <div className='tag'>
              <span>
                Truyen tranh
                    </span>
              <i className="far fa-times-circle"></i>
            </div>
            <div className='tag'>
              <span style={{ color: 'rgb(238, 63, 63)', fontWeight: 'bold', cursor: 'pointer' }}>
                Remove all filter
                </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div id='mb-filter'>
        <button>
          <span>Filter</span>
          <i className="fas fa-filter"></i>
        </button>
      </div> */}
    </>
  )

}

export default Filter