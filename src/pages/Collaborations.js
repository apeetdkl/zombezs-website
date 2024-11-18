import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the scrolling animation (left to right)
const scrollRight = keyframes`
  0% {
    transform: translateX(-100%); /* Start with the last image visible */
  }
  100% {
    transform: translateX(0); /* Move to the right */
  }
`;

// Keyframe for glowing effect
const glowEffect = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 255, 0, 1);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
  }
`;

// Styled components for the section and collaborations
const CollaborationsSection = styled.section`
  background: linear-gradient(to bottom right, rgba(28, 31, 38, 0.9), rgba(0, 0, 0, 0.8));
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

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
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ScrollingContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const CollaborationWrapper = styled.div`
  display: flex;
  animation: ${scrollRight} 5s linear infinite; /* Slow scrolling */
`;

const CollaborationLogo = styled.img`
  width: 350px;
  height: 250px; /* Adjust the height as needed */
  margin-right: 3rem; /* Spacing between logos */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    animation: ${glowEffect} 1.5s;
  }
`;

const Collaborations = () => {
  const collaborations = [
    { src: "/collaborations/CS.png", alt: "Company 1" },
    { src: "/collaborations/CS.png", alt: "Company 2" },
    { src: "/collaborations/CS.png", alt: "Company 3" },
    { src: "/collaborations/CS.png", alt: "Company 4" },
    { src: "/collaborations/CS.png", alt: "Company 5" },
  ];

  // Duplicate logos to ensure seamless loop
  const duplicatedCollaborations = [...collaborations, ...collaborations, ...collaborations, ...collaborations, ...collaborations, ...collaborations, ...collaborations, ...collaborations];

  return (
    <CollaborationsSection id="collaborations">
      <Title>Collaborations</Title>
      <ScrollingContainer>
        <CollaborationWrapper>
          {duplicatedCollaborations.map((collab, index) => (
            <CollaborationLogo key={index} src={collab.src} alt={collab.alt} />
          ))}
        </CollaborationWrapper>
      </ScrollingContainer>
    </CollaborationsSection>
  );
};

export default Collaborations;
