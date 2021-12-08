import React from 'react';
import {Copyright, FooterContainer, FooterMenu, FooterSection, Line} from "./Footer.elements";
import {Logo, NavItem} from "../Navbar/Navbar.elements";
import Link from "next/link";
import {Description, SocialItem, SocialMenu} from "../../globalStyles";
import {FaFacebook, FaInstagram, FaViber} from "react-icons/fa";

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <Logo src="/logo.png" alt="logo"/>
                <FooterMenu>
                    <Link href="/" passHref><NavItem>Home</NavItem></Link>
                    <Link href="/" passHref><NavItem>Products</NavItem></Link>
                    <Link href="/" passHref><NavItem>Contact</NavItem></Link>
                    <Link href="/" passHref><NavItem>Pregled</NavItem></Link>
                </FooterMenu>
            </FooterContainer>
            <Line />
             <FooterContainer>
                <Copyright>&copy; {new Date().getFullYear()} Optika Begić. All rights reserved.</Copyright>
                <SocialMenu>
                    <SocialItem href="https://www.facebook.com/optikabegic" target="_blank" rel="noreferrer"><FaFacebook size="20px" color="#fff" /></SocialItem>
                    <SocialItem href="https://www.instagram.com/optikabegic/" target="_blank" rel="noreferrer"><FaInstagram size="20px" color="#fff" /></SocialItem>
                    <SocialItem href="tel:38761400789" target="_blank" rel="noreferrer"><FaViber size="20px" color="#fff" /></SocialItem>
                </SocialMenu>
            </FooterContainer>
        </FooterSection>
    );
};

export default Footer;