import React from 'react';
import Link from 'next/link';
import {HamburgerIcon, Logo, Nav, NavItem, NavMenu} from "./Navbar.elements";
import {FaFacebook, FaInstagram, FaViber, FaBars, FaTimes} from "react-icons/fa";
import {useState} from "react";
import {SocialItem, SocialMenu} from "../../globalStyles";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <Nav click={click}>
            <NavMenu onClick={handleClick} click={click}>
                <Link href="/" passHref><NavItem>Home</NavItem></Link>
                <Link href="/" passHref><NavItem>Products</NavItem></Link>
                <Link href="/" passHref><NavItem>Contact</NavItem></Link>
                <Link href="/" passHref><NavItem>Pregled</NavItem></Link>
            </NavMenu>
            <Logo src="/logo.png" alt="logo"/>
            <HamburgerIcon onClick={handleClick}>
                {click ? (<FaTimes color="#000" size="22px"/>) : (<FaBars color="#000" size="22px"/>) }
            </HamburgerIcon>
            <SocialMenu>
                <SocialItem href="https://www.facebook.com/optikabegic" target="_blank" rel="noreferrer"><FaFacebook size="20px" color="#fff" /></SocialItem>
                <SocialItem href="https://www.instagram.com/optikabegic/" target="_blank" rel="noreferrer"><FaInstagram size="20px" color="#fff" /></SocialItem>
                <SocialItem href="tel:38761400789" target="_blank" rel="noreferrer"><FaViber size="20px" color="#fff" /></SocialItem>
            </SocialMenu>
        </Nav>
    );
};

export default Navbar;