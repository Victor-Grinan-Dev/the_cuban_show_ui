   
   export const isTagIncluded = (tag, filterTags) => {
    if(!filterTags){
      return false;
    }
    return filterTags.includes(tag);
  };
