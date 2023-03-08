import React, { useState } from 'react';
import { allTags } from '../../../appConfig';
import style from './filterSearchBar.module.css';

const FilterSearchBar = () => {
  const [isShowSearchInput, setIsShowSearchInput] = useState(false);
  return (
    <div className={style.filterSearchBar}>
        <ul className={style.filterSearchList} >
            {!isShowSearchInput &&
              <>
                <li className={style.filterSearchCriteria} >All</li>
                <li className={style.filterSearchCriteria} >Cuba</li>
                <li className={style.filterSearchCriteria} >Usa</li>
                <li className={style.filterSearchCriteria} >World's</li>
                <select className={style.filterSearchCriteria} 
                  style={{fontSize:"14px"}}
                >
                  <option style={{fontSize:"10px"}} hidden>More tags</option>
                  {allTags && allTags.map((t, i) => (
                    (t !== "usa" && t !=="cuba" && t !== "world") && <option key={i} style={{fontSize:"10px"}} value={t} >{t}</option>
                  ))}
                </select>
              </>
            }
            {
              isShowSearchInput &&
              <li className={style.searchCriteriaS} >
                <input type="text" className={style.searchInput} placeholder='Search'/>
                <select className={style.searchOptions}>
                    <option value="">By title</option>
                    <option value="">By date</option>
                </select>
              </li>
            }
            <li className={style.filterSearchCriteria} on onClick={()=>setIsShowSearchInput(!isShowSearchInput)}>🔎</li>
        </ul>
    </div>
  )
}

export default FilterSearchBar;