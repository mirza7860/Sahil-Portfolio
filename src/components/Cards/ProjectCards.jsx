import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  text-decoration: none;
  text-align: center;
  color: black;
  &:hover {
    background-color: ${({ theme }) =>
      theme.primary}; 
    color: ${({ theme }) =>
      theme.white};
  }
`;


const Card = styled.div`
  width: 350px;
  height: 600px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 2x;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + "15"};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "99"};
  overflow: hidden;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const ProjectCards = ({ project }) => {
  return (
    <Card key={project.id} id={project.id}>
      <Wrapper>
        <Image src={project.image} />
      </Wrapper>
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Details>
      <Wrapper>
        <ButtonGroup>
          <Button
            as="a"
            href={project?.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </Button>
          <Button
            as="a"
            href={project?.webapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live App
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Card>
  );
};

export default ProjectCards;
