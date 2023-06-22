import React from "react";
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
  const allTags = useSelector((state) => state.app.allTags);
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
      <p className={modalStyle.sectionName}>{translate('Tags', currentLang)+':'}</p>
      <div className={style.moreTags}>
        {allTags &&
          allTags.map(
            (t) =>
              t !== "usa" &&
              t !== "cuba" &&
              t !== "world" && (
                <AppBtn
                  name={t.en}
                  key={t.id}
                  id={t.id}
                  className={style.secundaryTags}
                  caption={translate(t.en, currentLang)}
                  type={"terceary"}
                  fx={(e) => addOrDelHandler(e.target.name)}
                  style={
                    isTagIncluded(t.en, filterTags)
                      ? MoreTagsSelectedAppBtn
                      : {
                          margin: "0 15px",
                        }
                  }
                />
              )
          )}
      </div>
      <AppBtn caption={translate("Clear all", currentLang)} type={"warning"} fx={()=>dispatch(setFilterTags([]))}/>
    </div>
  );
};

export default MoreTags;
