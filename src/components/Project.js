import React from "react";
import { Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Co-Pal",
    description: "Inspired by Omegle where you match and chat with other people with the same interest.",
    url: "https://github.com/DraayN",
    imageUrl: "/copal.png",
  },
  {
    title: "ConCom",
    description: "A Social Media Platform where you can share you day and message your friend",
    url: "https://github.com/DraayN",
    imageUrl: "/concom.png",
  },
  {
    title: "FoodStudio",
    description: "A Web Application that allows you to order your food online and deliver it at your home so you can chill and relax",
    url: "https://github.com/DraayN",
    imageUrl: "/foodstudio.png",
  },
];

const Project = () => {
  return (
    <>
      {projects.map((project, index) => (
        <Card key={index} style={{width:300}}>
          <Card.Header as="h5">{project.title}</Card.Header>
          <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
          <Card.Body>
            <Card.Text>{project.description}</Card.Text>
            <Button variant="dark" href={project.url}>
              View Github
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Project;
