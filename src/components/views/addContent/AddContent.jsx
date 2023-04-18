import React, { useEffect } from "react";
import { createContent } from "../../../services/firebaseService";
import genStyle from "../../../style/styleGeneral.module.css";
import style from "./addContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setContent,
  setError,
  setImageUrl,
  setMessage,
  addTag,
  setTags,
} from "../../../app/appSlice";
import { Content } from "../../../classes/content";
import { allTags } from "../../../appConfig";
import TagBtn from "../../UI/appBtn/TagBtn";
import { translate } from "../../../translation/translation";
import { isTagIncluded } from "../../../functions/tags";
import { selectedAppBtn } from "../../../style/generalStyles";

// import defaultImg from '../../../assets/logo-black.jpg'

/* TODO */
//click and unclick tags

const AddContent = () => {
  const dispatch = useDispatch();

  const content = useSelector((state) => state.app.content);
  const error = useSelector((state) => state.app.error);
  const message = useSelector((state) => state.app.message);
  const tags = useSelector((state) => state.app.tags);
  const currentLang = useSelector((state) => state.app.currentLang);

  // const [isShowTags, setIsShowTags] = useState(false);

  useEffect(() => {
    if (error || message) {
      const setTimer = setInterval(() => {
        cleanMessagge();
      }, 10000);
      return () => setTimer;
    }
    // eslint-disable-next-line
  }, [error, message]);

  // const showAllTasHandle = () => {
  //     setIsShowTags(!isShowTags);
  // }

  const addOrDelHandler = (tag) => {
    isTagIncluded(tag, tags)
      ? deleteTagFilterHandler(tag)
      : addTagsFiltershandler(tag);
  };

  const addTagsFiltershandler = (tag) => {
    dispatch(addTag([tag]));
  };

  const deleteTagFilterHandler = (tag) => {
    dispatch(
      setTags(
        tags.filter((t) => {
          return t !== tag;
        })
      )
    );
  };
  const addTagHandler = (e) => {
    if (!tags.includes(e?.target?.innerText)) {
      dispatch(addTag(e?.target?.innerText));
    }
    changeContent("tags", tags);
  };

  const cleanMessagge = () => {
    dispatch(setError(""));
    dispatch(setMessage(""));
  };

  const resetContent = () => {
    dispatch(setContent(new Content("", "", "", "")));
  };

  const changeHandler = (e) => {
    if (e?.target?.name === "imageUrl") {
      dispatch(setImageUrl(e.target.value));
    }
    changeContent(e.target.name, e.target.value);
  };

  const changeContent = (key, value) => {
    dispatch(setContent({ ...content, [key]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (content.title !== "" && content.body !== "" && content.heading !== "") {
      createContent(content);
      document.getElementById("form").reset();
      dispatch(setMessage("Article added!"));
      resetContent();
      dispatch(setTags([]));
    } else {
      dispatch(setError("Input fields still empty"));
    }
  };

  return (
    <div className={genStyle.view}>
      <div
        className={error ? genStyle.show : genStyle.hidden}
        style={{ color: "red" }}
      >
        {error}
      </div>
      <div
        className={message ? genStyle.show : genStyle.hidden}
        style={{ color: "green" }}
      >
        {message}
      </div>

      <form onSubmit={(e) => submitHandler(e)} className={style.form} id="form">
        <input
          name="title"
          className={style.input}
          type="text"
          placeholder={translate("Title", currentLang) + "*"}
          onChange={(e) => changeHandler(e)}
        />

        <input
          type="text"
          name="image"
          placeholder={translate("Image URL", currentLang) + "*"}
          className={style.input}
          onChange={changeHandler}
        />

        {/* <img id='preview' className={style.previewImg} src={imageUrl ? imageUrl : defaultImg} alt={"news portrait"} /> */}

        <input
          name="heading"
          className={style.input}
          type="text"
          placeholder={translate("Heading", currentLang) + "*"}
          onChange={(e) => changeHandler(e)}
        />
        <textarea
          className={style.textarea}
          name="body"
          id="body"
          placeholder={translate("Body", currentLang) + "*"}
          onChange={(e) => changeHandler(e)}
        ></textarea>

        {/* <p>Tags should be coma separated and lowercase</p>
            { taggs && <input type="text" className={style.input} name='tags'
            placeholder='Ex. politics, climate change' onChange={(e)=>changeHandler(e)}/>} */}

        <button>{translate("Publish", currentLang)}</button>
      </form>
      <div className={style.tagsArea}>
        <p
          className={style.isShowTags}
          // onClick={showAllTasHandle}
        >
          Tags:
          {/* {isShowTags?'Hide Tags' : 'Show Tags'} */}
        </p>
        {allTags &&
          allTags.map((t, i) => {
            const isIncluded = isTagIncluded(t, allTags);
            return (
              <TagBtn
                name={t}
                key={i}
                label={t}
                fxPrimary={addOrDelHandler}
                style={
                  isIncluded ? selectedAppBtn : null
                } /*isSelected={t.isTagSelected}*/
              />
            );
          })}
      </div>
    </div>
  );
};

export default AddContent;
