import React from 'react'
import {
  TSContainer
} from './styles';
import FrontLogo from '../../../../resources/img/frontLogo.png';

const TechStack = () => {
  return (
    <TSContainer>
      <div className='info'>
        <br/>
        <p> <strong>Strong:</strong>
        HTML/CSS, Styled Components, React.
        </p> 

        <p> <strong>Proficient:</strong>
        JavaScript, Gastby, Jest, React Testing Library.
        </p> 

        <p> <strong>Novice:</strong>
        Typescript, NodeJS,Redux.
        </p> 

        <p> <strong>Extra:</strong>
          SVG animations with CSS/Styled Components
        </p> 
      </div>

    <div className='section_title'>
      <img src={FrontLogo} alt="logo2" />
      <h1>Tech Stack</h1>
    </div>
    </TSContainer>
  )
};

export default TechStack;
