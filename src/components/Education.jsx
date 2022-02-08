import React from 'react'
import styled from 'styled-components'

const schools = [
  {
    name: "國立台灣大學",
    enName: "National Taiwan University",
    department: "經濟學系",
    degree: "碩士",
    url: "https://www.ntu.edu.tw/",
    img: "https://upload.wikimedia.org/wikipedia/zh/thumb/4/4c/National_Taiwan_University_logo.svg/400px-National_Taiwan_University_logo.svg.png"
  },
]

const EducationSection = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  flex-direction: column;
  align-items: center;

`

const EducationSectionTitle = styled.h1`
  display: flex;
`

const SchoolContainer = styled.div`
  display: flex;
  padding: 10px;
  max-width: 1200px;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const SchoolImage = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  margin: 10px 90px;
`

const SchoolContent = styled.div`
  display: flex;
  flex-direction: column;
`

const School = (props) => {
  const { name, enName, department, degree, img, url } = props;
  return (<SchoolContainer>
    <SchoolImage src={img} />
    <SchoolContent>
      <a href={url} target="_blank"><h2>{name}</h2></a>
      <h3>{enName}</h3>
      <h4>{department} {degree}</h4>
    </SchoolContent>
  </SchoolContainer>);
}

const Education = (props) => {
  return (
    <EducationSection>
      <EducationSectionTitle>教育程度</EducationSectionTitle>
      {schools.map((s) => <School {...s}/>)}
    </EducationSection>
  );
}

export default Education;
