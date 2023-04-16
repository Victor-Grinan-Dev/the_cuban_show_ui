import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import NewsCard from "../../UI/newsCard/NewsCard";
import genStyle from "../../../style/styleGeneral.module.css";
import { useEffect } from "react";
import { getContents } from "../../../services/firebaseService";
import { useDispatch, useSelector } from "react-redux";
import { setContents, setIsLoading } from "../../../app/appSlice";
import FilterSearchBar from "../../UI/filterSearchBar/FilterSearchBar";
import { filterByTags } from "../../../functions/filter";

/* MUI cards holder */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
      <Box sx={{ width: "100%", marginTop: "65px" }}>
        <Stack spacing={1}>
          {contents &&
            contentsFiltered.map((c, i) => (
              <Item key={i}>
                <NewsCard props={c} />
              </Item>
            ))}
        </Stack>
      </Box>
    </div>
  );
};

export default Content;
