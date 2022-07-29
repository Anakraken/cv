import React from 'react'
import Shine from '../../resources/img/Shine';
import {
  AboutContainer,
  Title
} from './styles';
import Presentation from './components/Presentation';
import TechStack from './components/TechStack';
import Languages from './components/Languages';
import Experience from './components/Experience';

const About = () => {
  return (
    <AboutContainer id="about">
      <Title>
            <h1>Hello Stranger!</h1> 
            <h2>Let's work togheter<Shine/></h2>  
      </Title> 
      <Presentation />
    <TechStack />
    <Languages />

      <h1>Education</h1>
      <p>
      Computer Engineering at UADY (Universidad Autónoma del Estado de Yucatán)
      </p>
    <Experience />
  </AboutContainer>
  )
}

export default About;
