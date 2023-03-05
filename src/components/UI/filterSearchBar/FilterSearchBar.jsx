import React from 'react';
import style from './filterSearchBar.module.css';

const FilterSearchBar = () => {
  return (
    <div className={style.filterSearchBar}>
        <ul className={style.filterSearchList} >
            <li className={style.filterSearchCriteria} >All</li>
            <li className={style.filterSearchCriteria} >Cuba</li>
            <li className={style.filterSearchCriteria} >Usa</li>
            <li className={style.filterSearchCriteria} >World's</li>
            <li className={style.searchCriteriaS} >
                <input type="text" className={style.searchInput} placeholder='Search'/>
                <select className={style.searchOptions}>
                    <option value="">By title</option>
                    <option value="">By date</option>
                </select>
            </li>
        </ul>
    </div>
  )
}

export default FilterSearchBar;