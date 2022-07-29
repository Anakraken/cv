import React from 'react'
import { PresentationContainer } from './styles';
import AboutPic from '../../../../resources/img/pp2.png';
import Shine from '../../../../resources/img/Shine';

const Presentation = () => {
  return (
    <PresentationContainer>
        <img src={AboutPic} alt="Profile-Pic2"/>

        <div>
          <p>
          I'm a very energetic frontend developer with experience in design and create websites and web applications.
          </p>

          <h6><Shine />
          Experienced in HTML and CSS,Javascript, React, Redux, Typescript, Jest, Unit testing whit React testing library.
          </h6>
         
          <h5>
          My most powerful skills is my unusual ability to use styled component as no one. I'm also really good setting SOLID patterns in the code structure to get a better and scalable code.
          </h5>

          <p>
          I have a lot of experience working whit teams, so my communications skills are pretty great.
          </p>
        </div>
      </PresentationContainer>
  )
}

export default Presentation;
