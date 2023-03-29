import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpeg";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Vishal Patel, currently pursuing Bachelor of Technology
            in University Institute of Engineering and Technology, Kanpur. I am
            a passionate fullstack developer.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create web apps from scratch. The technologies,
            tools and languages I am using to build my projects are HTML, CSS,
            JavaScript, REACT JS, Bootstrap, Express.js,MongoDB, Git and GitHub,
            and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href="https://drive.google.com/file/d/1JeGEz7WvWoezuF-0gU3mjtVCXpHq7Z6e/view?usp=share_link"
              target="_blank"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
