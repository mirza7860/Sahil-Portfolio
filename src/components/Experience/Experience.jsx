import React from "react";
import styled from "styled-components";
const Experience = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          With hands-on experience in modern web development, I've completed
          multiple projects, emphasizing seamless user experiences. Proficient
          in both frontend and backend technologies, I specialize in React for
          responsive interfaces and leverage Node.js with Express.js for robust
          server-side applications. Using MongoDB, I've implemented features
          like user authentication and optimized data storage. I've streamlined
          deployment with DigitalOcean and Render, utilizing CI/CD tools like
          GitHub Actions to reflect my commitment to efficient and scalable
          solutions. These experiences have enhanced my technical expertise,
          fostering a problem-solving mindset and collaborative approach. Eager
          to contribute to cutting-edge projects, I look forward to continuing
          my professional growth in the MERN stack development realm.
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Experience;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: justify;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: justify;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
