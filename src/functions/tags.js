   
   export const isTagIncluded = (tag, filterTags) => {
    if(!filterTags){
      return false;
    }
    console.log('does list includes ', tag, ' => ', filterTags.includes(tag));
    return filterTags.includes(tag);
  };
