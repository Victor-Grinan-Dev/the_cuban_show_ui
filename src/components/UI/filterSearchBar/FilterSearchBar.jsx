import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterTags,
  setSearch,
  setTags,
} from "../../../app/appSlice";
import { translate } from "../../../translation/translation";
import style from "./filterSearchBar.module.css";
import AppBtn from "../appBtn/AppBtn";
import { isTagIncluded } from "../../../functions/tags";
import { selectedAppBtn } from "../appBtn/standardStyle";
import FilterBarMoreTagsBtn from "../appBtn/FilterBarMoreTagsBtn";

const FilterSearchBar = () => {
  const dispatch = useDispatch();
  const [isShowSearchInput, setIsShowSearchInput] = useState(false);
  const filterTags = useSelector((state) => state.app.filterTags);
  const search = useSelector((state) => state.app.search);
  const currentLang = useSelector((state) => state.app.currentLang);

  useEffect(() => {
    dispatch(setTags(filterTags));
    // eslint-disable-next-line
  }, [filterTags]);

  const addOrDelHandler = (tag) => {
    isTagIncluded(tag, filterTags)
      ? deleteTagFilterHandler(tag)
      : addTagsFiltershandler(tag);
  };

  const addTagsFiltershandler = (tag) => {
    dispatch(setFilterTags([...filterTags, tag]));
  };

  const deleteTagFilterHandler = (tag) => {
    dispatch(
      setFilterTags(
        filterTags.filter((t) => {
          return t !== tag;
        })
      )
    );
  };

  return (
    <div className={style.filterSearchBar}>
      <div className={style.filterSearchList}>
        {!isShowSearchInput && (
          <>
            <AppBtn
              id="all"
              caption={translate("All", currentLang)}
              type="terceary"
              fx={() => {
                dispatch(setSearch(""));
                dispatch(setFilterTags([]));
              }}
              style={
                filterTags.length === 0 && search === "" ? selectedAppBtn : null
              }
            />
            <AppBtn
              id="cuba"
              name="cuba"
              caption={translate("Cuba", currentLang)}
              type="terceary"
              fx={(e) => {
                addOrDelHandler(e.target.name);
              }}
              style={filterTags.includes("cuba") ? selectedAppBtn : null}
            />
            <AppBtn
              id="usa"
              name="usa"
              caption={translate("USA", currentLang)}
              type="terceary"
              fx={(e) => {
                addOrDelHandler(e.target.name);
              }}
              style={filterTags.includes("usa") ? selectedAppBtn : null}
            />
            <AppBtn
              id="world"
              name="world"
              caption={translate("World", currentLang)}
              type="terceary"
              fx={(e) => {
                addOrDelHandler(e.target.name);
              }}
              style={filterTags.includes("world") ? selectedAppBtn : null}
            />
            <FilterBarMoreTagsBtn
            />
          </>
        )}
        {isShowSearchInput && (
          <div className={style.searchCriteriaS}>
            <input
              type="text"
              className={style.searchInput}
              placeholder={translate("Search", currentLang)}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              value={search}
            />
          </div>
        )}
        <AppBtn
          type={"terceary"}
          fx={() => setIsShowSearchInput(!isShowSearchInput)}
          caption={"🔎"}
        />
      </div>
    </div>
  );
};

export default FilterSearchBar;
