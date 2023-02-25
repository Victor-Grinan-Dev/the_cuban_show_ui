import { createSlice } from '@reduxjs/toolkit';
import { Content } from '../classes/content';

export const appSlice = createSlice({
    name:'app',
    initialState:{
        isLoading: true,
        search:'',

        contents:[],
        content: new Content("", "", "", ""),

        imgRef:undefined,
        imgFile:undefined,
    },

    reducers:{
        setContents(state, action){
            state.contents = action.payload;
        },
        setContent(state, action){
            state.content = action.payload;
        },
        setIsLoading(state, action){
            state.isLoading= action.payload;
        }
    }
});

export const {
    setContents,
    setContent,
    setIsLoading
} = appSlice.actions;

export default appSlice.reducer;