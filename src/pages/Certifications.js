import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the scrolling animation (initially visible and move left)
const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
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

// Styled components for the section and certificates
const CertificatesSection = styled.section`
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

const CertificateWrapper = styled.div`
  display: flex;
  animation: ${scrollLeft} 450s linear infinite; /* Slow scrolling */
`;

const CertificateCard = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  margin-right: 3rem; /* Spacing between certificates */
  background-color: #1c1f26;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    animation: ${glowEffect} 2.5s ;
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CertificateInfo = styled.div`
  position: absolute;
  bottom: 0;  /* Position the text at the bottom */
  left: 0;
  width: 100%;
  height: 50%;  /* Adjust the height of the text container */
  display: flex;
  justify-content: center;  /* Center horizontally */
  align-items: center;  /* Center vertically within the bottom section */
  flex-direction: column;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);  /* Semi-transparent background */
  color: #fff;
  text-align: center;
  padding: 1rem;  /* Optional: Add padding to prevent text from touching the edges */

  ${CertificateCard}:hover & {
    opacity: 1;  /* Make text visible on hover */
  }


`;

const Certificates = () => {
  const certificates = [
    { src: "/certificates/AD3.png", alt: "Certificate 1", title: "Networking" },
    { src: "/certificates/AD5.png", alt: "Certificate 2", title: "Web Dev" },
    { src: "/certificates/SC2.png", alt: "Certificate 3", title: "Cloud Computing" },
    { src: "/certificates/SP3.png", alt: "Certificate 4", title: "Cyber Security" },
    { src: "/certificates/AD1.png", alt: "Certificate 5", title: "DBMS" },
    { src: "/certificates/SP4.png", alt: "Certificate 6", title: "Security +" },
    { src: "/certificates/SC1.png", alt: "Certificate 7", title: "Machine Learning" },
    { src: "/certificates/SC3.png", alt: "Certificate 8", title: "Backend Web Dev" },
    { src: "/certificates/AD2.png", alt: "Certificate 9", title: "Hackathon" },
    { src: "/certificates/SP2.png", alt: "Certificate 10", title: "Mobile App Security" },
    { src: "/certificates/AD4.png", alt: "Certificate 11", title: "Mobile App Security" },
    { src: "/certificates/SC4.png", alt: "Certificate 12", title: "Img Processing" },
    { src: "/certificates/SP1.png", alt: "Certificate 13", title: "Hackathon" },
  ];

  // Duplicate certificates to ensure seamless loop
  const duplicatedCertificates = [ ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates];

  return (
    <CertificatesSection id="certificates">
      <Title>Certifications</Title>
      <ScrollingContainer>
        <CertificateWrapper>
          {duplicatedCertificates.map((certificate, index) => (
            <CertificateCard key={index}>
              <CertificateImage src={certificate.src} alt={certificate.alt} />
              <CertificateInfo>
                <h3>{certificate.title}</h3>
              </CertificateInfo>
            </CertificateCard>
          ))}
        </CertificateWrapper>
      </ScrollingContainer>
    </CertificatesSection>
  );
};

export default Certificates;
