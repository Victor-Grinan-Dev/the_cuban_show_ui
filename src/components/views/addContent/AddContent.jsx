import React, { useEffect, useState } from "react";
import { createContent } from "../../../services/firebaseService";
import genStyle from "../../../style/styleGeneral.module.css";
import style from "./addContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setContent,
  setError,
  setMessage,
  setShowError,
  setShowMessage,
  setTags,
} from "../../../app/appSlice";
import { Content } from "../../../classes/content";
import { allTags } from "../../../appConfig";
import TagBtn from "../../UI/appBtn/TagBtn";
import { translate } from "../../../translation/translation";
import { isTagIncluded } from "../../../functions/tags";
import { storage } from "../../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";
import NewsCard from "../../UI/newsCard/NewsCard";
import TextEditor from "../../UI/textEditor/TextEditor";
import AppBtn from "../../UI/appBtn/AppBtn";

const AddContent = () => {
  const dispatch = useDispatch();

  const content = useSelector((state) => state.app.content);
  const error = useSelector((state) => state.app.error);
  const message = useSelector((state) => state.app.message);
  const tags = useSelector((state) => state.app.tags);
  const currentLang = useSelector((state) => state.app.currentLang);
  const [imageUpload, setImageUpload] = useState(null);
  const textEditor = document.getElementsByClassName("ql-editor");

  const panelBtnStyle = {
    padding: "10px",
    margin: "10px 0",
  };

  // useEffect(() => {
  //   if (error || message) {
  //     const setTimer = setInterval(() => {
  //       cleanMessagge();
  //     }, 10000);
  //     return () => setTimer;
  //   }
  //   // eslint-disable-next-line
  // }, [error, message]);

  useEffect(() => {
    if (tags.length !== 0) {
      dispatch(setContent({ ...content, tags: tags }));
    }
    // eslint-disable-next-line
  }, [tags]);

  useEffect(() => {
    /* REVIEW TO ERASE */
    if (imageUpload)
      dispatch(
        setContent({ ...content, previewUrl: URL.createObjectURL(imageUpload) })
      );
    // eslint-disable-next-line
  }, [imageUpload]);

  useEffect(() => {
    if (
      content.image &&
      content.title &&
      content.heading &&
      content.body &&
      content.tags.length !== 0
    ) {
      createContent(content);

      //reset
      document.getElementById("form").reset();
      textEditor[0].innerHTML = "";
      resetContent();
      dispatch(setTags([]));
  

      //success
      dispatch(setMessage("Article added!"));
      dispatch(setShowMessage(true));
    }
    // eslint-disable-next-line
  }, [content]);

  const addOrDelHandler = (tag) => {
    isTagIncluded(tag, tags) ? deleteTagHandler(tag) : addTagsHandler(tag);
  };

  const addTagsHandler = (newTag) => {
    dispatch(setTags([...tags, newTag]));
  };

  const deleteTagHandler = (tag) => {
    dispatch(
      setTags(
        tags.filter((t) => {
          return t !== tag;
        })
      )
    );
  };
  const clearTags = () => {
    dispatch(setTags([]));
    dispatch(setContent({ ...content, tags: [] }));
  };

  // const cleanMessagge = () => {
  //   dispatch(setError(""));
  //   dispatch(setMessage(""));
  // };

  const clearForm = () => {
    document.getElementById("form").reset();
    resetContent();
  };
  const clearTextEditor = () => {
    textEditor[0].innerHTML = "";
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

  const uploadImage = () => {
    const imageRef = ref(storage, `images/${v4() + imageUpload?.name}`);
    const uploadTask = uploadBytesResumable(imageRef, imageUpload);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(setContent({ ...content, image: downloadURL }));
        });
      }
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      content.title !== "" &&
      content.body !== "" &&
      content.heading !== "" &&
      tags.length > 0
    ) {
      uploadImage();
    } else {
      /**
       * TODO
       * more specific of what is missing
       */
      dispatch(setError("Input fields still empty"));
      dispatch(setShowError(true))
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
      <NewsCard props={content} isTest={true} />
      <div className="formContainer">
        <form
          onSubmit={(e) => submitHandler(e)}
          className={style.form}
          id="form"
        >
          <span className={style.formSpan}>
            <input
              name="title"
              className={style.input}
              type="text"
              placeholder={translate("Title", currentLang) + "*"}
              value={content.title && content.title}
              onChange={(e) => changeHandler(e)}
            />
            <input
              id="imageInput"
              type="file"
              name="image"
              className={style.fileInput}
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
            <div className="editorContainer">
              <TextEditor />
            </div>
          </span>
          <input
              name="author"
              className={style.input}
              type="text"
              placeholder={translate("Author", currentLang)}
              onChange={(e) => changeHandler(e)}
              value={content.author && content.author}
            />
          <AppBtn
            caption={translate("Publish", currentLang)}
            type={"primary"}
            style={{ margin: "10px" }}
          />
        </form>
      </div>
      <div className={style.tagsArea}>
        <p className={style.isShowTags}>Tags:</p>
        {allTags &&
          allTags.map((t, i) => {
            return (
              <TagBtn
                name={t}
                key={i}
                label={translate(t, currentLang)}
                fxPrimary={() => addOrDelHandler(t)}
                isSelected={isTagIncluded(t, tags)}
              />
            );
          })}
      </div>
      <div className={style.panel}>

        <AppBtn
          caption={translate("Clear image, title & heading", currentLang)}
          type={"secondary"}
          fx={clearForm}
          style={panelBtnStyle}
        />

        <AppBtn
          caption={translate("Clear Text Body", currentLang)}
          type={"secondary"}
          fx={clearTextEditor}
          style={panelBtnStyle}
        />
        <AppBtn
          caption={translate("Clear tags", currentLang)}
          type={"secondary"}
          fx={clearTags}
          style={panelBtnStyle}
        />
      </div>
    </div>
  );
};

export default AddContent;
