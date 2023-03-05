export const SortRecentFirts = (articles) => {
    return articles.sort((a, b)=>b.date - a.date);
}
export const SortRecentLast = (articles) => {
    return articles.sort((a, b)=> a.date - b.date);
}