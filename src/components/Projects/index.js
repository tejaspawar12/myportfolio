import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Data Visualization to Generative AI. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Analysis and Visualization' ?
            <ToggleButton active value="Data Analysis and Visualization" onClick={() => setToggle('Data Analysis and Visualization')}>Data Analysis and Visualization</ToggleButton>
            :
            <ToggleButton value="Data Analysis and Visualization" onClick={() => setToggle('Data Analysis and Visualization')}>Data Analysis and Visualization</ToggleButton>
          }
          <Divider />
          {toggle === 'Machine learning' ?
            <ToggleButton active value="  Machine learning" onClick={() => setToggle('Machine learning')}>Machine learning</ToggleButton>
            :
            <ToggleButton value="Machine learning" onClick={() => setToggle('Machine learning')}>Machine learning</ToggleButton>
          }
          <Divider />
          {toggle === 'Generative AI' ?
            <ToggleButton active value="Generative AI" onClick={() => setToggle('Generative AI')}>Generative AI</ToggleButton>
            :
            <ToggleButton value="Generative AI" onClick={() => setToggle('Generative AI')}>Generative AI</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects