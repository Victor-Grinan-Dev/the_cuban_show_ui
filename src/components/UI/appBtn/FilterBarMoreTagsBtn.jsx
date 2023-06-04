import React, { useEffect, useState } from "react";
import AppBtn from "./AppBtn";
import { translate } from "../../../translation/translation";
import { useDispatch, useSelector } from "react-redux";
import { setShowMoreTags } from "../../../app/appSlice";
import { selectedAppBtn } from "./standardStyle";

const isSecundaryTagsIncluded = (tagArray) => {
  const newArray = tagArray.filter((t)=>{
    return t !== "usa" && t !== "cuba" && t !== "world"
  });
  return newArray.length > 0;
};

const FilterBarMoreTagsBtn = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  const filterTags = useSelector((state) => state.app.filterTags);
  const dispatch = useDispatch();
  const [isMoreTagesIncl, setIsMoreTagesIncl] = useState(false);

  useEffect(() => {
    if (filterTags.length !== 0) {
      setIsMoreTagesIncl(isSecundaryTagsIncluded(filterTags));
    }else{
      setIsMoreTagesIncl(false)
    }

    // eslint-disable-next-line
  }, [filterTags]);

  return (
    <AppBtn
      id="moreTags"
      type={"terceary"}
      caption={translate("More tags", currentLang)}
      fx={() => {
        dispatch(setShowMoreTags(true));
      }}
      style={isMoreTagesIncl ? selectedAppBtn : null}
    />
  );
};

export default FilterBarMoreTagsBtn;
