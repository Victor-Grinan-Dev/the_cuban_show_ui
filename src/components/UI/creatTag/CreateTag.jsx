import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Tag } from '../../../classes/tag';
import { translate } from '../../../translation/translation';
import { addTag, getAllTags } from '../../../services/firebaseService';
import { setAllTags, setTags } from '../../../app/appSlice';
import { isTagIncludedAllTags } from '../../../functions/tags';
import AppBtn from '../appBtn/AppBtn';
import generalStyles from '../../../style/styleGeneral.module.css';

const CreateTag = () => {
    const newTagObj = new Tag("", ""); 
    const [newTag, setNewTag] = useState(newTagObj);
    const currentLang = useSelector(state => state.app.currentLang);
    const allTags = useSelector(state => state.app.allTags);
    const tags = useSelector(state => state.app.tags);

    const isTagRepeated = false;
    const dispatch = useDispatch();

    const changeValue = (e)=> {
        if(!isTagRepeated){
            setNewTag({...newTag, [e.target.id]:e.target.value.toLowerCase()});
        }
    }
    const submit = () => {
        if(!isTagIncludedAllTags(newTag.en, allTags)){
            if(newTag.en && newTag.es){
                addTag({
                    es:newTag.es,
                    en:newTag.en
                });
                getAllTags()
                .then((data) => dispatch(setAllTags(data)));
                dispatch(setTags([...tags, newTag.en]));
                setNewTag(newTagObj);
            }
        }
    }

  return (
    <div>
       <div> {translate("Add", currentLang)} {translate("tag", currentLang)}:</div>
        <div>EN: <input id='en' name='englishTag' type="text" placeholder='New tag in english' onChange={changeValue} value={newTag.en}/></div>
        <div>ES: <input id='es' name='englishTag' type="text" placeholder='New tag in spanish' onChange={(e)=> changeValue(e)} value={newTag.es}/></div>
        <div className={generalStyles.flexCenter}><AppBtn caption={translate("Add", currentLang)} type={'execute'} fx={submit}/></div>
    </div>
  )
}

export default CreateTag