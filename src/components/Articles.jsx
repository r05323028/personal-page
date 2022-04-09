import React from "react";
import styled from "styled-components";

const articles = [
  {
    title: "Redux 教學",
    url: 'https://r05323028.github.io/redux-tutorial',
    description: "深入淺出的介紹 Redux ，從理解為何要使用 Redux 作為狀態管理工具，到其設計原理，再到手把手教學。此教學除了會學習到如何使用 Redux 作為狀態管理工具以外，也會學習到如何使用 Redux-Thunk & Redux-Saga 來管理 Side effects 與使用 Jest & Mirage.js 來撰寫測試。",
  },
];

const ArticlesSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const ArticlesSectionTitle = styled.h1`
  display: flex;
`;

const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    @media (max-width: 500px) {
    flex-direction: column;
  }
`

const ArticleTitle = styled.h2`
    display: flex;
    width: 150px;
    margin: 10px 90px;
`

const ArticleDescription = styled.div`
    display: flex;
    max-width: 860px;

`

const Article = (props) => {
    const {title, url, description} = props
  return <ArticleContainer>
      <ArticleTitle><a href={url}>{title}</a></ArticleTitle>
      <ArticleDescription>{description}</ArticleDescription>
  </ArticleContainer>
};

const Articles = (props) => {
  return (
    <ArticlesSection>
      <ArticlesSectionTitle>文章</ArticlesSectionTitle>
      {articles.map((article) => (
        <Article {...article} />
      ))}
    </ArticlesSection>
  );
};

export default Articles;
