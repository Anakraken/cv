import React from 'react'
import {
  FooterContainer
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <h1>LINKS</h1>

      <p>
      email: <a>anakrakennn@gmail.com</a>
      </p>
      
       <p>
        Last version of this CV: 
        <a href='https://github.com/Anakraken/portfolio/blob/main/README.md'>
          Anakraken/resume
        </a>
      </p>

      <p>
        Personal project: 
        <a href='https://anakraken.github.io/login/'>
          Demo
        </a>
      </p>

      <p>        
      Git tech talk:
        <a href='https://jamboard.google.com/d/1H08EdamGAC7eNf8QVNeFafeZ6BwNwRtPBD3Ykxo5csg/viewer?f=0'>
          jamboared.git
        </a>
      </p>

      <p>        
      Asincronismo tech talk:
        <a href='https://jamboard.google.com/d/1qmk2OGrl0XLArgN_LUBbs7BurBOxHuN_3BVnwAbJ0ow/viewer?f=0'>
          jamboard.Asincronismo      
        </a>
      </p>
    
    </FooterContainer>
  )
};

export default Footer;
