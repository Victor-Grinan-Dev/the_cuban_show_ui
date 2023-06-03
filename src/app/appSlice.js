import { createSlice } from "@reduxjs/toolkit";
import { Content } from "../classes/content";
import { SortRecentFirts, SortRecentLast } from "../functions/sorting";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    //general
    isLoading: true,
    search: "",
    error: "",
    message: "",
    filterTags: [],
    showSettings: false,
    showConfim: true,
    currentLang: "en",
    appMemo:{},

    //Auth
    isAuth: false,
    auth: {},
    user: "",

    //content
    contents: [],
    content: new Content("", "", "", ""),
    tags: [],

    //image
    imageList: [],
    imgUrl: "",
  },

  reducers: {
    //general
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setFilterTags(state, action) {
      state.filterTags = action.payload;
    },
    setShowSettings(state) {
      state.showSettings = !state.showSettings;
    },
    setShowConfirm(state) {
      state.showConfim = !state.showConfim;
    },
    setCurrentLang(state, action) {
      state.currentLang = action.payload;
    },
    setAppMemo(state, action){
      state.appMemo = action.payload;
    },

    //Auth
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setAuth(state, action) {
      state.auth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },

    //content
    setContents(state, action) {
      state.contents = SortRecentFirts(action.payload);
    },
    setContentsInvert(state, action) {
      state.contents = SortRecentLast(action.payload);
    },
    setContent(state, action) {
      state.content = action.payload;
    },
    clearTags(state) {
      state.tags = [];
    },
    setTags(state, action) {
      state.tags = action.payload;
    },

    //image
    setImageList(state, action) {
      state.imageList = action.payload;
    },
    setImageUrl(state, action) {
      state.imgUrl = action.payload;
    },
  },
});

export const {
  //general
  setIsLoading,
  setSearch,
  setError,
  setMessage,
  setFilterTags,
  addFilterTag,
  delFilterTag,
  setShowSettings,
  setShowConfirm,
  setCurrentLang,
  setAppMemo,
  
  //Auth
  setIsAuth,
  setAuth,
  setUser,

  //content
  setContents,
  setContent,
  setContentsInvert,
  clearTags,
  setTags,

  //image
  setImageList,
  setImageUrl,
} = appSlice.actions;

export default appSlice.reducer;
