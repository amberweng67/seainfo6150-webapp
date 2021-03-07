import React from "react";

const ArticleListItem = ({article}) => {
  return (
    <article>
      <h3>{article.title}</h3>
      <time dateTime={article.timeStamp}>{article.displayDate}</time>
      <p>{article.shortText}</p>
    </article>
  );
};

export default ArticleListItem;