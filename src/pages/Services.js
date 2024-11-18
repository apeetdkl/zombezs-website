import React from "react";
import styled from "styled-components";

// Main container for Services section
const ServicesContainer = styled.section`
  background: linear-gradient(to bottom right, rgba(26, 32, 46, 0.7), rgba(0, 0, 0, 0.8)); /* New gradient background */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 2rem;
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

// Wrapper for cards
const ServiceCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

// Card container with perspective
const CardContainer = styled.div`
  perspective: 1500px; /* Enables 3D effect */
  width: 300px;
  height: 320px;
`;

// Inner card for flipping
const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* 3D flipping context */
  transition: transform 0.8s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.5);
  border-radius: 15px;

  &:hover {
    transform: rotateY(180deg); /* Flips the card */
    box-shadow: 0 8px 15px rgba(218, 33, 33, 0.957)
  }
`;

// Front and back faces of the card
const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hides the back face when not active */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Front face
const CardFront = styled(CardFace)`
  background-color: #1c1f26;
  color: #fff;
  padding: 1rem;
`;

// Back face
const CardBack = styled(CardFace)`
  background-color: #2a2f36;
  color: #fff;
  transform: rotateY(180deg); /* Positions the back face correctly */
  padding: 1.5rem;
  text-align: center;
`;

// Image/icon on the front
const ServiceImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

// Title on the front face
const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

// Description on the back face
const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

// Services component
const Services = () => {
  const services = [
    {
      title: "Web Development",
      image: "https://img.icons8.com/external-flat-juicy-fish/80/000000/external-website-coding-and-development-flat-flat-juicy-fish.png",
      description:
        "Develop fast, modern websites with React, Node.js, and innovative web technologies.",
    },
    {
      title: "UI / UX",
      image: "https://img.icons8.com/?size=100&id=53450&format=png&color=000000",
      description:
        "Design intuitive, user-friendly interfaces that enhance usability and visual appeal effectively.",
    },
    {
      title: "Cybersecurity ",
      image: "https://img.icons8.com/color/80/000000/security-checked.png",
      description:
        "Ensure data protection with advanced cybersecurity strategies for maximum digital asset security.",
    },
    {
      title: "Networking ",
      image: "https://img.icons8.com/color/80/000000/network.png",
      description:
        "Implement robust networking solutions ensuring seamless connectivity and enhanced system performance.",
    },
  ];


  return (
    <ServicesContainer id="services">
      <Title>Services</Title>
      <ServiceCardWrapper>
        {services.map((service, index) => (
          <CardContainer key={index}>
            <CardInner>
              {/* Front Face */}
              <CardFront>
                <ServiceImage src={service.image} alt={service.title} />
                <ServiceTitle>{service.title}</ServiceTitle>
              </CardFront>
              {/* Back Face */}
              <CardBack>
                <ServiceDescription>{service.description}</ServiceDescription>
              </CardBack>
            </CardInner>
          </CardContainer>
        ))}
      </ServiceCardWrapper>
    </ServicesContainer>
  );
};

export default Services;
