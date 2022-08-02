import React from 'react';
import {
  Background,
  Grid,
  IconsGrid
} from "./styles";
import PP from '../../resources/img/pps.png';
import Twitter from '../../resources/img/twitter';
import Logo from '../../resources/img/Logo';
import Github from '../../resources/img/github';
import Instagram from '../../resources/img/instagram';
import Linkedin from '../../resources/img/Linkedin';


function Home() {
  return (
    <Background id="home">
      <Grid>
        <img src={PP} alt='profile' />
        <div className='logo'>
          <Logo/>
        </div>
      </Grid>
      <IconsGrid>
        <Github url='https://github.com/Anakraken'/>
        <Instagram url='https://www.instagram.com/anakrakennn/'/>
        <Twitter url='https://twitter.com/anakrakennn'/>
        <Linkedin url='https://www.linkedin.com/in/anakrakennn/'/>
      </IconsGrid>
    </Background>
  )
}

export default Home;
