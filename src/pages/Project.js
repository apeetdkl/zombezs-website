import React from "react";
import styled from "styled-components";

// Main container for Projects section
const ProjectsContainer = styled.section`
  background: linear-gradient(to bottom right, rgba(28, 31, 38, 0.9), rgba(0, 0, 0, 0.8)); /* Gradient background */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 2rem; /* Padding for overall spacing */
`;

// Section title
const Title = styled.h2`
  color: #ff0000; /* Green */
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 3px 3px 10px rgba(255, 4, 4, 1); /* Green glow */
  font-family: "Doto", sans-serif; /* Modern font */

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

// Wrapper for project cards
const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem; /* Space between cards */
`;

// Project card container
const ProjectCard = styled.div`
  background-color: #1c1f26;
  color: #fff;
  border-radius: 15px;
  width: 300px;
  height: 300px;
  padding: 1.5rem; /* Inner spacing */
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.5); /* Subtle shadow */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem; /* Space between cards */

  &:hover {
    transform: translateY(-10px); /* Slight lift effect */
    box-shadow: 0 8px 15px rgba(218, 33, 33, 0.957); /* Red glow on hover */
  }

  @media (max-width: 768px) {
    width: 45%; /* Two cards per row on medium screens */
    margin: 0.5rem;
  }

  @media (max-width: 480px) {
    width: 100%; /* Single card per row on small screens */
    margin: 0.5rem 0;
  }
`;

// Icon in the center of the card
const ProjectIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

// Project title
const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

// View demo button (hidden by default, appears on hover)
const ViewDemoButton = styled.a`
  display: none; /* Hidden by default */
  padding: 0.8rem 2rem;
  background-color: #ff4c4c;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff0000;
    transform: scale(1.1); /* Slight enlarge on hover */
  }

  ${ProjectCard}:hover & {
    display: block; /* Show button on card hover */
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Piggy Dice",
      icon: "https://img.icons8.com/color/96/dice.png",
      demoLink: "https://nittaany.github.io/piggyDice/",
    },
    {
      title: "Portfolio Website",
      icon: "https://img.icons8.com/?size=100&id=naDnVpQ3BNkR&format=png&color=000000k: "
    },
    {
      title: "AI-Image",
      icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
      demoLink: "https://apeetdkl.netlify.app/ai%20image.html",
    },
    {
      title: "Weather Using API",
      icon: "https://img.icons8.com/color/96/cloud.png",
      demoLink: "https://apeetdkl.netlify.app/weather",
    },
    {
      title: "Port Scanner",
      icon: "https://img.icons8.com/color/96/network.png",
      demoLink: "https://github.com/Sp313/Port_Scanner",
    },
    {
      title: "OSPF Configuration",
      icon: "https://img.icons8.com/color/96/router.png",
      demoLink: "https://github.com/Sp313/OSPF-basic-configuration.",
    },
    {
      title: "NAT Config",
      icon: "https://img.icons8.com/color/96/ip-address.png",
      demoLink: "https://github.com/Sp313/Nat-Configuration-Static-Dynamic-",
    },
    {
      title: "Banking App",
      icon: "https://img.icons8.com/color/96/bank.png",
      demoLink: "https://github.com/apeetdkl/Bank-Management-System",
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <Title><h2>Projects </h2></Title>
      <ProjectCardWrapper>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectIcon src={project.icon} alt={`${project.title} Icon`} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ViewDemoButton href={project.demoLink} target="_blank">
              View Demo
            </ViewDemoButton>
          </ProjectCard>
        ))}
      </ProjectCardWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
