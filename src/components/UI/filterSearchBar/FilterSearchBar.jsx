import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTags, setSearch, setTags } from '../../../app/appSlice';
import { allTags } from '../../../appConfig';
import style from './filterSearchBar.module.css';

const FilterSearchBar = () => {
  const dispatch = useDispatch();
  const [isShowSearchInput, setIsShowSearchInput] = useState(false);
  const filterTags = useSelector(state => state.app.filterTags)
  const search = useSelector(state => state.app.search);

  useEffect(() => {
    dispatch(setTags(filterTags));
  }, [filterTags, dispatch]);

  const selectedCritStyle = {
    backgroundColor:"green", 
    color:'white',
  };

  const addOrDelHandler = (tag) => {
    isTagIncluded(tag) ? deleteTagFilterHandler(tag) : addTagsFiltershandler(tag);
  };

  const addTagsFiltershandler = (tag) => {
      dispatch(setFilterTags([...filterTags, tag]));
  };

  const deleteTagFilterHandler = (tag) => {   
    dispatch(setFilterTags(filterTags.filter(t => {
        return t !== tag
      }
    )));
  };

  const isTagIncluded = (tag) => {
    return filterTags.includes(tag)
  };

  return (
    <div className={style.filterSearchBar}>
        <ul className={style.filterSearchList} >
            {!isShowSearchInput &&
              <>
                <li 
                  id='All'
                  className={style.filterSearchCriteria}
                  style={filterTags.length === 0 ? selectedCritStyle : null}
                  onClick={ ()=>{
                    dispatch(setSearch(''))
                    dispatch(setFilterTags([]))
                  }} 
                >All</li>
                <li 
                  id='cuba'
                  className={style.filterSearchCriteria} 
                  style={filterTags.includes('cuba') ? selectedCritStyle : null}
                  onClick={ (e) => {
                    addOrDelHandler(e.target.id)
                  }}
                >Cuba</li>
                <li 
                  id='usa'
                  style={filterTags.includes('usa') ? selectedCritStyle : null}
                  className={style.filterSearchCriteria} 
                  onClick={ (e) => {
                    addOrDelHandler(e.target.id)
                  }}
                >Usa </li>
                <li 
                id='world'
                style={filterTags.includes('world') ? selectedCritStyle : null}
                  className={style.filterSearchCriteria} 
                  onClick={ (e) => {
                    addOrDelHandler(e.target.id)
                  }}
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
                <input type="text"
                 className={style.searchInput} 
                 placeholder='Search'
                 onChange={(e)=>dispatch(setSearch(e.target.value))}
                 value={search}
                 />
              </li>
            }
            <li className={style.filterSearchCriteria} onClick={()=>setIsShowSearchInput(!isShowSearchInput)}>🔎</li>
        </ul>
    </div>
  )
};

export default FilterSearchBar;