import React from 'react'
import { 
  PresentationContainer,
  InfoContainer,
  RegularText,
  ExpShineText,
  PowerText,
  ProfileContainer
} from './styles';
import AboutPic from '../../../../resources/img/pp2s.png';
import Shine from '../../../../resources/img/Shine';
import Button from '../../../../components/Button';

const Presentation = () => {
  return (
    <PresentationContainer>
        <ProfileContainer>
          <img src={AboutPic} alt="Profile-Pic2"/>
          {/* <Button /> */}
        </ProfileContainer>

        <InfoContainer >
          <RegularText>
            I'm a very energetic frontend developer with experience in design and create websites and web applications.
          </RegularText>

          <ExpShineText>
            <Shine />
            Experienced in HTML and CSS,Javascript, React, Redux, Typescript, Jest, Unit testing whit React testing library.
          </ExpShineText>
         
          <PowerText>
          My most powerful skills is my unusual ability to use styled component as no one. I'm also really good setting SOLID patterns in the code structure to get a better and scalable code.
          </PowerText>

          <RegularText>
          I have a lot of experience working with teams, so my communications skills are pretty optimal.
          </RegularText>
        </InfoContainer>
      </PresentationContainer>
  )
}

export default Presentation;
