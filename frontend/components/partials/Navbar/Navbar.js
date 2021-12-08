import React from 'react';
import Link from 'next/link';
import {HamburgerIcon, Logo, Nav, NavItem, NavMenu, SocialItem, SocialMenu} from "./Navbar.elements";
import {FaFacebook, FaInstagram, FaViber, FaBars, FaTimes} from "react-icons/fa";
import {useState} from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <Nav click={click}>
            <NavMenu onClick={handleClick} click={click}>
                <Link prefetch href="/" passHref><NavItem>Home</NavItem></Link>
                <Link prefetch href="/" passHref><NavItem>Products</NavItem></Link>
                <Link prefetch href="/" passHref><NavItem>Contact</NavItem></Link>
                <Link prefetch href="/" passHref><NavItem>Pregled</NavItem></Link>
            </NavMenu>
            <Logo src="/logo.png" alt="logo"/>
            <HamburgerIcon onClick={handleClick}>
                {click ? (<FaTimes color="#000" size="22px"/>) : (<FaBars color="#000" size="22px"/>) }
            </HamburgerIcon>
            <SocialMenu>
                <SocialItem><FaFacebook size="22px" color="#fff" /></SocialItem>
                <SocialItem><FaInstagram size="22px" color="#fff" /></SocialItem>
                <SocialItem><FaViber size="22px" color="#fff" /></SocialItem>
            </SocialMenu>
        </Nav>
    );
};

export default Navbar;