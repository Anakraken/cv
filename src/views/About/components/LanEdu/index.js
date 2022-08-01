import React from 'react'
import {LanEduContainer} from './styles';

const LanEdu = () => {
  return (
    <LanEduContainer>
      <div>
        <h1>Language</h1>
        <p>
          <strong>Spanish</strong> -- Native
        </p>

        <p>
          <strong>English</strong> -- B1
        </p>
      </div>

      <div>
        <h1>Education</h1>
          <p>
          Computer Engineering at UADY
          <br />
           (Universidad Autónoma del Estado de Yucatán)
          </p>
      </div>
    </LanEduContainer>
  )
};

export default LanEdu;
