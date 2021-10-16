import React from "react";
import styled from "styled-components";

const projects = [
  {
    title: "Primer on Statistics",
    description:
      "使用 Jupyter Book 來建立的基礎統計學課本。希望藉由程式碼的執行來幫助大家更好的理解統計學以及其直覺意義。 \
      這個專案主要使用了在 Python 中常用的一些熱門的科學計算套件，如: numpy 、 scipy 、 statsmodels 等， \
      並且使用 plotly 來繪製互動式的圖表。",
    img: "https://raw.githubusercontent.com/r05323028/primer-on-statistics/main/logo.png",
    repo: "https://github.com/r05323028/primer-on-statistics",
  },
  {
    title: "Eyes - Taiwanese Public Opinion Mining System",
    description: "專注於台灣的論壇、新聞來源的輿情挖掘系統",
    img: "https://raw.githubusercontent.com/r05323028/eyes/main/doc/static/images/brand_dark.jpg",
    repo: "https://github.com/r05323028/eyes",
  },
];

const ProjectContainer = styled.div`
  display: flex;
  padding: 10px;
  max-width: 1200px;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  display: flex;
  width: 300px;
  height: 150px;
  margin: 15px;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const ProjectTitle = styled.h2`
  display: flex;
  font-weight: bold;
  font-size: 24px;
`;

const ProjectContent = styled.article``;

const ProjectSection = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;

  @media (min-width: 1200px) {
    margin: 0 300px;
  }
`;

const ProjectSectionTitle = styled.h1`
  display: flex;
`;

const Project = (props) => {
  return (
    <ProjectContainer>
      <ProjectImage src={props.img} />
      <ProjectDescription>
        <a href={props.repo} target="_blank">
          <ProjectTitle>{props.title}</ProjectTitle>
        </a>
        <ProjectContent>{props.description}</ProjectContent>
      </ProjectDescription>
    </ProjectContainer>
  );
};

const Projects = (props) => {
  return (
    <ProjectSection>
      <ProjectSectionTitle>專案</ProjectSectionTitle>
      {projects.map((p) => (
        <Project
          title={p.title}
          description={p.description}
          img={p.img}
          repo={p.repo}
        />
      ))}
    </ProjectSection>
  );
};

export default Projects;
