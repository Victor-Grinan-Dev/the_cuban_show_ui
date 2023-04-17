import React from "react";
import { allTags } from "../../../appConfig";
import AppBtn from "../appBtn/AppBtn";
import { translate } from "../../../translation/translation";
import { isTagIncluded } from "../../../functions/tags";
import { useDispatch, useSelector } from "react-redux";
import { setFilterTags } from "../../../app/appSlice";
import style from "./moreTags.module.css";
import modalStyle from "../modals/modals.module.css";
import { selectedAppBtn } from "../appBtn/standardStyle";

const MoreTagsSelectedAppBtn = { ...selectedAppBtn, margin: "0 15px" };

const MoreTags = () => {
  const filterTags = useSelector((state) => state.app.filterTags);
  const currentLang = useSelector((state) => state.app.currentLang);
  const dispatch = useDispatch();
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
    <div className={style.moreTags}>
      <p className={modalStyle.sectionName}>TAGS:</p>
      <div className={style.moreTags}>
        {allTags &&
          allTags.map(
            (t, i) =>
              t !== "usa" &&
              t !== "cuba" &&
              t !== "world" && (
                <AppBtn
                  name={t}
                  key={i}
                  id={t}
                  className={style.secundaryTags}
                  caption={translate(t, currentLang)}
                  type={"terceary"}
                  fx={(e) => addOrDelHandler(e.target.name)}
                  style={
                    isTagIncluded(t, filterTags)
                      ? MoreTagsSelectedAppBtn
                      : {
                          margin: "0 15px",
                        }
                  }
                />
              )
          )}
      </div>
    </div>
  );
};

export default MoreTags;
