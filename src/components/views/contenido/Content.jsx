import NewsCard from "../../UI/newsCard/NewsCard";
import genStyle from "../../../style/styleGeneral.module.css";
import { useEffect } from "react";
import { getContents } from "../../../services/firebaseService";
import { useDispatch, useSelector } from "react-redux";
import { setContents, setIsLoading } from "../../../app/appSlice";
import FilterSearchBar from "../../UI/filterSearchBar/FilterSearchBar";
import { filterByTags } from "../../../functions/filter";
import style from "./styleContent.module.css";
import AdvCard from "../../UI/advCard/AdvCard";
import MainNewsCard from "../../UI/mainNewsCard/MainNewsCard";

const Content = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.app.contents);
  const isLoading = useSelector((state) => state.app.isLoading);
  const search = useSelector((state) => state.app.search);
  const selectedTags = useSelector((state) => state.app.tags);

  const contentsFilteredByTags = filterByTags(contents, selectedTags);
  const advs = [
    "advetisments1",
    "advetisments2",
    "advetisments3",
  ];
  let value = advs.length - 1;
  const nextAdv = () => {
    
    if(value === advs.length - 1){
      value = 0;
    }else{
      value++
    }
    return value;
  }
  const adsInterval = 5; //every x cards show advertisment
  /**
   * contentsFiltered :
   * return all objects "content" filtered by parameter tags and search-input overlaped.
   * return all objects if search-input = '' and tags array lenght = 0
   */
  const contentsFiltered =
    selectedTags.lenght !== 0
      ? filterByTags(contents, selectedTags).filter((content) => {
          return content?.title?.toLowerCase().includes(search.toLowerCase());
        })
      : contentsFilteredByTags.filter((content) => {
          return content?.title?.toLowerCase().includes(search.toLowerCase());
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
    /* If there are tag filters dont show main cnews card */
    <div className={genStyle.view}>
      <FilterSearchBar />
      <div className={style.box}>
        <div className={style.stack}>
          {contents &&
            contentsFiltered.map((c, i) =>
              i === 0 ? (
                <MainNewsCard props={c} key={c.id} />
              ) : i % adsInterval === 0 ? (
                <>
                  <AdvCard
                    id={i}
                    key={i}
                    text={advs[nextAdv()]}
                  />
                  <NewsCard props={c} key={c.id} />
                </>
              ) : (
                <NewsCard props={c} key={c.id} />
              )
            )}
        </div>
      </div>
      <div className={style.rightColumnAdv}> advetisments</div>
    </div>
  );
};

export default Content;
