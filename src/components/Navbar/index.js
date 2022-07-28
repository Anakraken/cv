import React from 'react'
import { NavItem, Container } from './styles';
import UnderMark from '../../resources/img/Undermark';

const Navbar = () => {
  return (
    <Container>
      <NavItem href="#home">
        Home
        <div className='under'><UnderMark /></div>
      </NavItem>
     
      <NavItem href="#about"> 
        About me 
        <div className='under'><UnderMark /></div>
      </NavItem>
    </Container>
  )
}

export default Navbar;
