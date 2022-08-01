import React from 'react'
import {
  FooterContainer
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <h1>LINKS</h1>

      <p>
      email: <a>anakraken@gmail.com</a>
      </p>
      
      <p>
        Last version of this CV: 
        <a>https://github.com/Anakraken/portfolio</a>
      </p>


      <p>        
      Docs from my code talks:
      <br/>
      <a>
      https://jamboard.google.com/d/1H08EdamGAC7eNf8QVNeFafeZ6BwNwRtPBD3Ykxo5csg/viewer?f=0
      </a>
      <br/>
      <br/>

      <a>
      https://jamboard.google.com/d/1qmk2OGrl0XLArgN_LUBbs7BurBOxHuN_3BVnwAbJ0ow/viewer?f=0
      </a>
      </p>
    
    </FooterContainer>
  )
};

export default Footer;
