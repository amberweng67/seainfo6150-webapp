import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = ({article}) => {
  return (
    <article>
      <header>
        <h1>{article.title}</h1>
        <address>{article.author} (
          <a href={"mailto:" + article.authorEmail}>{article.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={article.timeStamp}>{article.displayDate}</time>
        <br />
        <img src={article.image._url} alt="News Picture" width="1100" height="619" />
      </header> 
    
      <HTMLText text={article.text} />
    </article>
  );
};

export default DynamicArticle;
