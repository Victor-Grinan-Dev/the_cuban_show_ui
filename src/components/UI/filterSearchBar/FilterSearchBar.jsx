import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterTags,
  setSearch,
  setShowSettings,
  setTags,
} from "../../../app/appSlice";
import { translate } from "../../../translation/translation";
import style from "./filterSearchBar.module.css";
import AppBtn from "../appBtn/AppBtn";
import { isTagIncluded } from "../../../functions/tags";

const FilterSearchBar = () => {
  const dispatch = useDispatch();
  const [isShowSearchInput, setIsShowSearchInput] = useState(false);
  const filterTags = useSelector((state) => state.app.filterTags);
  const search = useSelector((state) => state.app.search);
  const currentLang = useSelector((state) => state.app.currentLang);
  //const isShowSettings = useSelector(state => state.app.isShowSettings);

  useEffect(() => {
    dispatch(setTags(filterTags));
    // eslint-disable-next-line
  }, [filterTags]);

  const selectedCritStyle = {
    backgroundColor: "green",
    color: "white",
    borderColor: "darkgreen",
  };

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
  /** TODO make "moreTagsbtn to have green bg if a secundary tag is selected" */
  const isSecundaryTagsIncluded = () => {
    filterTags.forEach((t) => {
      if (t !== "usa" && t !== "cuba" && t !== "world") {
        if (isTagIncluded(t, filterTags)) {
          return true;
        }
      }
    });
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
                filterTags.length === 0 && search === ""
                  ? selectedCritStyle
                  : null
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
              style={filterTags.includes("cuba") ? selectedCritStyle : null}
            />
            <AppBtn
              id="usa"
              name="usa"
              caption={translate("USA", currentLang)}
              type="terceary"
              fx={(e) => {
                addOrDelHandler(e.target.name);
              }}
              style={filterTags.includes("usa") ? selectedCritStyle : null}
            />
            <AppBtn
              id="world"
              name="world"
              caption={translate("World", currentLang)}
              type="terceary"
              fx={(e) => {
                addOrDelHandler(e.target.name);
              }}
              style={filterTags.includes("world") ? selectedCritStyle : null}
            />
            <AppBtn
              id="moreTags"
              type={"terceary"}
              style={isSecundaryTagsIncluded() ? selectedCritStyle : null}
              caption={translate("More tags", currentLang)}
              fx={() => {
                dispatch(setShowSettings(true));
              }}
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
