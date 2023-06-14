   
   export const isTagIncluded = (tag, filterTags) => {
    if(!filterTags){
      return false;
    }
    return filterTags.includes(tag);
  };

   export const isTagIncludedAllTags = (tag, allTags) => {
    for (let i = 0; i < allTags.length; i++){   
      if(allTags[i].en === tag){
        return true
      }
    }
    return false;
  };
