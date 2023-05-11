import React, { useEffect, useState } from "react";
import { createContent } from "../../../services/firebaseService";
import genStyle from "../../../style/styleGeneral.module.css";
import style from "./addContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setContent,
  setError,
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
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import NewsCard from "../../UI/newsCard/NewsCard";

const AddContent = () => {
  const dispatch = useDispatch();

  const content = useSelector((state) => state.app.content);
  const error = useSelector((state) => state.app.error);
  const message = useSelector((state) => state.app.message);
  const tags = useSelector((state) => state.app.tags);
  const currentLang = useSelector((state) => state.app.currentLang);
  const [imageUpload, setImageUpload] = useState(null);

  useEffect(() => {
    if (error || message) {
      const setTimer = setInterval(() => {
        cleanMessagge();
      }, 10000);
      return () => setTimer;
    }
    // eslint-disable-next-line
  }, [error, message]);

  useEffect(() => {
    if (imageUpload)
      dispatch(
        setContent({ ...content, previewUrl: URL.createObjectURL(imageUpload) })
      );
    // eslint-disable-next-line
  }, [imageUpload]);

  useEffect(() => {
    console.log(content);
  }, [content]);

  const addOrDelHandler = (tag) => {
    isTagIncluded(tag, tags)
      ? deleteTagFilterHandler(tag)
      : addTagsFiltershandler(tag);
  };

  const addTagsFiltershandler = (tag) => {
    dispatch(addTag(tag));
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

  const cleanMessagge = () => {
    dispatch(setError(""));
    dispatch(setMessage(""));
  };

  const resetContent = () => {
    dispatch(setContent(new Content("", "", "", "")));
  };

  const changeHandler = (e) => {
    changeContent(e.target.name, e.target.value);
  };

  const changeContent = (key, value) => {
    dispatch(setContent({ ...content, [key]: value }));
  };

  // const removeSelectedImage = () => {
  //   setImageUpload(null);
  //   setContent({ ...content, image: "" });
  // };

  const uploadImage = () => {
    /**
     * TODO
     * upload and retrieve the url of the image before saving the firestore data
     */
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload?.name + v4()}`);

    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL().then((url) => {
        changeContent("image", url);
      });
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    uploadImage();

    if (
      (content.title !== "" && content.body !== "" && content.heading !== "",
      tags.length !== 0,
      content.image !== "")
    ) {
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
      <NewsCard props={content} />
      {/* {imageUpload && (
        <button onClick={removeSelectedImage}>Remove This Image</button>
      )} */}

      <form onSubmit={(e) => submitHandler(e)} className={style.form} id="form">
        <input
          name="title"
          className={style.input}
          type="text"
          placeholder={translate("Title", currentLang) + "*"}
          value={content.title && content.title}
          onChange={(e) => changeHandler(e)}
        />

        <input
          type="file"
          name="image"
          className={style.input}
          onChange={(e) => setImageUpload(e.target.files[0])}
        />

        <input
          name="heading"
          className={style.input}
          type="text"
          placeholder={translate("Heading", currentLang) + "*"}
          onChange={(e) => changeHandler(e)}
          value={content.heading && content.heading}
        />
        <textarea
          className={style.textarea}
          name="body"
          id="body"
          placeholder={translate("Body", currentLang) + "*"}
          onChange={(e) => changeHandler(e)}
          value={content.body && content.body}
        ></textarea>

        <button>{translate("Publish", currentLang)}</button>
      </form>
      <div className={style.tagsArea}>
        <p className={style.isShowTags}>Tags:</p>
        {allTags &&
          allTags.map((t, i) => {
            const isIncluded = isTagIncluded(t, allTags);
            return (
              <TagBtn
                name={t}
                key={i}
                label={t}
                fxPrimary={() => addOrDelHandler(t)}
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
