import React from "react";
import styled from "styled-components";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

const experiences = [
  {
    title: "Software Engineer",
    company: "tsmc",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Tsmc.svg/200px-Tsmc.svg.png",
    location: "Taipei, Taiwan",
    from: "2022.3",
    to: "current",
    isSquareLogo: true,
  },
  {
    title: "Sr. Data Scientist",
    company: "KKLab",
    img: "../../static/kklab-logo.svg",
    location: "Taipei, Taiwan",
    from: "2019.11",
    to: "2022.3",
    isSquareLogo: false,
  },
  {
    title: "Data Scientist",
    company: "KKBOX",
    img: "../../static/kkbox-logo.svg",
    location: "Taipei, Taiwan",
    from: "2018.8",
    to: "2019.11",
    isSquareLogo: false,
  },
];

const ExperiencesSectionTitle = styled.h1``;

const ExperiencesSection = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
`;

const ExperienceImage = styled(ThemedImage)`
  display: flex;
  width: ${(props) => (props.isSquareLogo ? "200px" : "300px")};
  height: 150px;
  margin: ${(props) => (props.isSquareLogo ? "15px 65px" : "15px")};
  /* margin: 15px; */
`;

const ExperienceCompany = styled.h3``;

const ExperienceDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceContainer = styled.div`
  display: flex;
  padding: 10px;
  max-width: 1200px;
  align-items: flex-start;
  width: 100%;
`;

const ExperienceTitle = styled.h2``;

const ExperienceLocation = styled.p``;

const ExperienceFromTo = styled.p``;

const Experience = ({
  title,
  company,
  location,
  img,
  from,
  to,
  isSquareLogo,
}) => {
  return (
    <ExperienceContainer>
      <ExperienceImage
        isSquareLogo={isSquareLogo}
        sources={{
          light: useBaseUrl(img),
          dark: useBaseUrl(img),
        }}
      />
      <ExperienceDescription>
        <ExperienceTitle>{title}</ExperienceTitle>
        <ExperienceCompany>{company}</ExperienceCompany>
        <ExperienceLocation>{location}</ExperienceLocation>
        <ExperienceFromTo>
          {from} - {to}
        </ExperienceFromTo>
      </ExperienceDescription>
    </ExperienceContainer>
  );
};

const Experiences = (props) => {
  return (
    <ExperiencesSection>
      <ExperiencesSectionTitle>工作經歷</ExperiencesSectionTitle>
      {experiences.map((ex) => (
        <Experience
          title={ex.title}
          company={ex.company}
          img={ex.img}
          location={ex.location}
          from={ex.from}
          to={ex.to}
          isSquareLogo={ex.isSquareLogo}
        />
      ))}
    </ExperiencesSection>
  );
};

export default Experiences;
