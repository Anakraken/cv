import React, { useState, useEffect } from 'react';
import { NavItem, Container } from './styles';
import UnderMark from '../../resources/img/Undermark';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    const onNavBarChange = () => {
        if (window.scrollY > 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {
        onNavBarChange();
        window.addEventListener("scroll", onNavBarChange);
    }, [scroll]);

  return (
    <Container active={scroll}>
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