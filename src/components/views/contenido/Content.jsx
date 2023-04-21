import NewsCard from "../../UI/newsCard/NewsCard";
import genStyle from "../../../style/styleGeneral.module.css";
import { useEffect } from "react";
import { getContents } from "../../../services/firebaseService";
import { useDispatch, useSelector } from "react-redux";
import { setContents, setIsLoading } from "../../../app/appSlice";
import FilterSearchBar from "../../UI/filterSearchBar/FilterSearchBar";
import { filterByTags } from "../../../functions/filter";
import style from "./styleContent.module.css";

const Content = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.app.contents);
  const isLoading = useSelector((state) => state.app.isLoading);
  const search = useSelector((state) => state.app.search);
  const selectedTags = useSelector((state) => state.app.tags);

  const contentsFilteredByTags = filterByTags(contents, selectedTags);

  /**
   * contentsFiltered :
   * return all objects "content" filtered by parameter tags and search-input overlaped.
   * return all objects if search-input = '' and tags array lenght = 0
   */
  const contentsFiltered =
    selectedTags.lenght !== 0
      ? filterByTags(contents, selectedTags).filter((content) => {
          return content.title.toLowerCase().includes(search.toLowerCase());
        })
      : contentsFilteredByTags.filter((content) => {
          return content.title.toLowerCase().includes(search.toLowerCase());
        });

  useEffect(() => {
    dispatch(setIsLoading(true));
    getContents()
      .then((data) => dispatch(setContents(data)))
      .then(dispatch(setIsLoading(false)));
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className={genStyle.view}>
        <p>LOADING...</p>
      </div>
    );
  }
  return (
    <div className={genStyle.view}>
      <FilterSearchBar />
      <div className={style.box}>
        <div className={style.stack}>
          {contents &&
            contentsFiltered.map((c, i) => <NewsCard props={c} key={i} />)}
        </div>
      </div>
      <div className={style.rightColumnAdv}> advetisments</div>
    </div>
  );
};

export default Content;
