import { createSlice } from '@reduxjs/toolkit';
import { Content } from '../classes/content';
import { SortRecentFirts, SortRecentLast } from '../functions/sorting';

export const appSlice = createSlice({
    name:'app',
    initialState:{

        //general
        isLoading: true,
        search:'',
        error:'',
        message:'',
        
        //content
        contents:[],
        content: new Content("", "", "", ""),
        taggs:[],

        //image
        imageList:[],
        imgUrl:'',
    },

    reducers:{

        //general
        setIsLoading(state, action){
            state.isLoading= action.payload;
        },
        setSearch(state, action){
            state.search = action.payload;
        },
        setError(state, action){
            state.error=action.payload;
        },
        setMessage (state, action){
            state.message=action.payload;
        },

        //content
        setContents(state, action){
            state.contents = SortRecentFirts(action.payload);
        },
        setContentsInvert(state, action){
            state.contents = SortRecentLast(action.payload);
        },
        // constent filter
        setContent(state, action){
            state.content = action.payload;
        },
        addTag(state, action){
            state.taggs = [ ...state.taggs, action.payload ];
        },
        setTaggs(state, action){
            state.taggs = action.payload;
        },

        //image
        setImageList(state, action){
            state.imageList = action.payload;
        },
        setImageUrl(state, action){
            state.imgUrl= action.payload;
        }      
    }
});

export const {
    //general
    setIsLoading,
    setSearch,
    setError,
    setMessage,

    //content
    setContents,
    setContent,

    //image
    setImageList,
    setImageUrl
} = appSlice.actions;

export default appSlice.reducer;