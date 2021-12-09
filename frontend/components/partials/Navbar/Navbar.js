import React from 'react';
import Link from 'next/link';
import {HamburgerIcon, Logo, Nav, NavItem, NavMenu} from "./Navbar.elements";
import {FaFacebook, FaInstagram, FaViber, FaBars, FaTimes} from "react-icons/fa";
import {useState} from "react";
import {SocialItem, SocialMenu} from "../../globalStyles";

const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <Nav click={click}>
            <NavMenu onClick={handleClick} click={click}>
                <Link href="/" passHref><NavItem color={props.color}>Home</NavItem></Link>
                <Link href="/" passHref><NavItem color={props.color}>Products</NavItem></Link>
                <Link href="/contact" passHref><NavItem color={props.color}>Contact</NavItem></Link>
                <Link href="/" passHref><NavItem color={props.color}>Pregled</NavItem></Link>
            </NavMenu>
            {props.color === "black" ? (<Logo src="/logo.png" alt="logo"/>) : (<Logo src="/logowhite.png" alt="logo"/>)}
            <HamburgerIcon onClick={handleClick}>
                {click ? (<FaTimes color={props.color} size="22px"/>) : (<FaBars color={props.color} size="22px"/>) }
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