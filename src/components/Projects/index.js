import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Explore a curated collection of projects showcasing my mastery of
          modern web development and dedication to creating impactful user
          experiences.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard
              project={project}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
