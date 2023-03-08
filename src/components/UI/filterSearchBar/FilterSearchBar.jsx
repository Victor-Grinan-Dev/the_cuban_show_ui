import React, {useEffect, useState } from 'react';
import { allTags } from '../../../appConfig';
import style from './filterSearchBar.module.css';

const FilterSearchBar = () => {
  const [isShowSearchInput, setIsShowSearchInput] = useState(false);
  const [tagsFilters, setTagsFilters] = useState([]);

  useEffect(() => {
    console.log(tagsFilters);
  }, [tagsFilters]);

  const addOrDelHandler = (tag) => {
    isTagIncluded(tag) ? deleteTagFilterHandler(tag) : addTagsFiltershandler(tag)
  }

  const addTagsFiltershandler = (tag) => {
      setTagsFilters([...tagsFilters, tag]);
    };

  const deleteTagFilterHandler = (tag) => {   
    setTagsFilters(tagsFilters.filter(t => {
        return t !== tag
      }
    ))
  };

  const isTagIncluded = (tag) => {
    return tagsFilters.includes(tag)
  }

  return (
    <div className={style.filterSearchBar}>
        <ul className={style.filterSearchList} >
            {!isShowSearchInput &&
              <>
                <li className={style.filterSearchCriteria}
                onClick={ ()=>setTagsFilters([]) } 
                >All</li>

                <li 
                  id='cuba'
                  className={style.filterSearchCriteria} 
                  onClick={ (e) => addOrDelHandler(e.target.id)} 
                >Cuba</li>
                <li 
                  id='usa'
                  className={style.filterSearchCriteria} 
                  onClick={ (e) => addOrDelHandler(e.target.id) }
                >Usa </li>
                <li 
                id='world'
                  className={style.filterSearchCriteria} 
                  onClick={ (e) => addOrDelHandler(e.target.id) }
                >World's</li>
                <select  
                  style={{fontSize:"14px"}}
                  onChange={(e) => addOrDelHandler(e.target.value)}
                >
                  <option style={{fontSize:"10px"}} hidden>More tags</option>
                  {allTags && allTags.map((t, i) => (
                    (t !== "usa" && t !=="cuba" && t !== "world") && <option key={i} 
                    style={{fontSize:"10px"}} 
                    value={t} 
                    id={t}
                    >
                      {t}{isTagIncluded(t) && '✅'}
                    </option>
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
            <li className={style.filterSearchCriteria} onClick={()=>setIsShowSearchInput(!isShowSearchInput)}>🔎</li>
        </ul>
    </div>
  )
}

export default FilterSearchBar;