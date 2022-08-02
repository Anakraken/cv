import React from 'react'
import Shine from '../../resources/img/Shine';
import {
  AboutContainer,
  Title
} from './styles';
import Presentation from './components/Presentation';
import TechStack from './components/TechStack';
import LanEdu from './components/LanEdu';

const About = () => {
  return (
    <AboutContainer id="about">
      <Title>
            <h1>Hello Stranger!</h1> 
            <h2>Let's work togheter
              <Shine/>
            </h2>  
      </Title> 
      <Presentation />
    <TechStack />
    <LanEdu />
  </AboutContainer>
  )
}

export default About;
