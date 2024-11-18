import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Import icons

// Styled Components for the Team Section
const TeamContainer = styled.section`
  background: linear-gradient(to bottom right, rgba(26, 32, 46, 0.7), rgba(0, 0, 0, 0.8));
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  position: relative;
  overflow: hidden; /* Hide overflow for any children */
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
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem; /* Adjust spacing between the cards */
  padding-bottom: 1rem; /* Adds space for horizontal scroll bar */
  
  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack cards vertically on small screens */
    gap: 2rem; /* Adjust the gap for smaller screens */
  }
`;

const Card = styled.div`
  background-color: rgba(28, 31, 38, 0.8); /* Semi-transparent dark background */
  border-radius: 15px;
  padding: 2rem;
  width: 280px; /* Fixed width for uniformity */
  min-height: 500px; /* Minimum height to allow for more text */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content is spaced properly */
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 255, 0, 0.5);
  cursor: pointer;
  text-align: center;
  backdrop-filter: blur(10px); /* Blurring the background */
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.5);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(218, 33, 33, 0.957); /* Green shadow */
  }
`;

const CardImage = styled.img`
  border-radius: 50%;
  width: 120px; /* Fixed image size */
  height: 120px; /* Fixed image size */
  object-fit: cover;
  margin: 0 auto; 
  margin-bottom: 1rem;
`;

const CardName = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const CardRole = styled.p`
  color: #00ff00;
  font-weight: bold;
  margin-bottom: 1rem;
  word-wrap: break-word; /* Prevents overflow for long words */
`;

const CardDescription = styled.p`
  color: #ccc;
  font-size: 1rem;
  margin-bottom: 1rem;
  word-wrap: break-word; /* Prevents overflow for long words */
  flex-grow: 1; /* Allow description to take up remaining space */
  overflow: auto; /* Allow scrolling inside the card */
  padding-bottom: 1rem; /* Add space for better readability */
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Increased spacing between icons */
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #00ff00; /* Default color green */
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #ff0000; /* Red hover effect */
  }
`;

// Team Section Component
const Team = () => {
  const teamMembers = [
    {
      name: 'Apeet ',
      role: 'Developer',
      img: '/images/AD.png', // Image should be in the public directory
      description: 'Expert in JavaScript, React, and building scalable responsive applications.',
      social: {
        facebook: '#',
        twitter: '#',
        whatsapp: '#',
      },
    },
    {
      name: 'Sujal ',
      role: 'Cybersecurity ',
      img: '/images/SP.png',
      description: 'Securing data, protecting systems, and ensuring smooth project execution and communication.',
      social: {
        facebook: '#',
        twitter: '#',
        whatsapp: '#',
      },
    },
    {
      name: 'Satyam ',
      role: 'Developer',
      img: '/images/SC.png',
      description: 'Creative UI/UX designer focused on intuitive and engaging user experiences.',
      social: {
        facebook: '#',
        twitter: '#',
        whatsapp: '#',
      },
    },
   
    {
      name: 'Abhi ',
      role: 'Designer',
      img: '/images/AK.png',
      description: 'Passionate designer creating unique, growth-driven solutions with creative strategies.',
      social: {
        facebook: '#',
        twitter: '#',
        whatsapp: '#',
      },
    },
  ];


  return (
    <TeamContainer id="team">
      <Title>Our Team</Title>
      <CardWrapper>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <Card>
              <CardImage src={member.img} alt={member.name} />
              <CardName>{member.name}</CardName>
              <CardRole>{member.role}</CardRole>
              <CardDescription>{member.description}</CardDescription>
              <SocialLinks>
                <SocialLink href={member.social.facebook} target="_blank">
                  <FaFacebook /> {/* Facebook Icon */}
                </SocialLink>
                <SocialLink href={member.social.twitter} target="_blank">
                  <FaTwitter /> {/* Twitter Icon */}
                </SocialLink>
                <SocialLink href={member.social.whatsapp} target="_blank">
                  <FaWhatsapp /> {/* WhatsApp Icon */}
                </SocialLink>
              </SocialLinks>
            </Card>
          </motion.div>
        ))}
      </CardWrapper>
    </TeamContainer>
  );
};

export default Team;
