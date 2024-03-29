import NewsCard from "../../UI/newsCard/NewsCard";
import genStyle from "../../../style/styleGeneral.module.css";
import { useEffect } from "react";
import { getAllTags, getContents } from "../../../services/firebaseService";
import { useDispatch, useSelector } from "react-redux";
import { setAllTags, setContents, setIsLoading } from "../../../app/appSlice";
import FilterSearchBar from "../../UI/filterSearchBar/FilterSearchBar";
import { filterByTags } from "../../../functions/filter";
import style from "./styleContent.module.css";
import AdvCard from "../../UI/advCard/AdvCard";
import MainNewsCard from "../../UI/mainNewsCard/MainNewsCard";
import { v4 as uuidv4 } from "uuid";
import { getScroll, saveScroll } from "../../../hooks/useScroll";

const Content = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.app.contents);
  const isLoading = useSelector((state) => state.app.isLoading);
  const search = useSelector((state) => state.app.search);
  const selectedTags = useSelector((state) => state.app.tags);
  const contentsFilteredByTags = filterByTags(contents, selectedTags);
  const advs = ["advetisments1", "advetisments2", "advetisments3"];
  let value = advs.length - 1;

  useEffect(() => {
    if (getScroll("Feed")) {
      let { scrollY } = getScroll("Feed");

      window.scrollTo((0, scrollY), 200);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const save = () => {
      saveScroll("Feed", { scrollY: window.pageYOffset });
    };
    save();
    document.addEventListener("scroll", save);
    return () => document.removeEventListener("scroll", save);
    // eslint-disable-next-line
  }, []);

  const nextAdv = () => {
    if (value === advs.length - 1) {
      value = 0;
    } else {
      value++;
    }
    return value;
  };

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
    getContents().then((data) => dispatch(setContents(data)));
    getAllTags()
      .then((data) => dispatch(setAllTags(data)))
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
            contentsFiltered.map((c, i) =>
              i === 0 && selectedTags.length === 0 && search === "" ? (
                <MainNewsCard {...c} id={`${i}-${uuidv4()}`} key={"mainCard"} />
              ) : i % adsInterval === 0 ? (
                <span key={uuidv4()}>
                  <AdvCard id={i} key={`${uuidv4()}`} text={advs[nextAdv()]} />
                  <NewsCard {...c} key={`${uuidv4()}`} />
                </span>
              ) : (
                <NewsCard {...c} key={`${uuidv4()}`} />
              )
            )}
        </div>
      </div>

      <AdvCard
        id={"lastAdv"}
        key={`lastAdv-${uuidv4()}`}
        text={advs[nextAdv()]}
      />
    </div>
  );
};

export default Content;
