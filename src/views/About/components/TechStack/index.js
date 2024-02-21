import React from 'react'
import {
  TSContainer
} from './styles';
import FrontLogo from '../../../../resources/img/frontLogo.png';

const TechStack = () => {
  return (
    <TSContainer>
      <div className='info'>
        <br />
        <p> <strong>Strong:</strong>
          HTML/CSS, Styled Components, Javascript, ReactJS.
        </p>

        <p> <strong>Proficient:</strong>
          NextJS, NodeJs, ReduxToolkit.
        </p>

        <p> <strong>Novice:</strong>
          Typescript, AWS, Vercel, Heroku, Restfull API, MongoDB, GraphQL.
        </p>

        <p> <strong>Extra:</strong>
          SVG animations with CSS/Styled Components,
          Web Design, Adobe illustraitor and Adobe XD
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
