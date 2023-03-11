export const filterByTags = ( contents, tags ) => {
    return contents.filter( content => tags.every( tag => content.tags.includes(tag)))
  };