import React from 'react';
import {Copyright, FooterContainer, FooterMenu, FooterNav, FooterSection} from "./Footer.elements";
import {Logo} from "../Navbar/Navbar.elements";
import Link from "next/link";
import {Line, SocialItem, SocialMenu} from "../../globalStyles";
import {FaFacebook, FaInstagram, FaViber} from "react-icons/fa";

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <Logo src="/logo.png" alt="logo"/>
                <FooterMenu>
                    <Link href="/" passHref><FooterNav>Home</FooterNav></Link>
                    <Link href="/" passHref><FooterNav>Products</FooterNav></Link>
                    <Link href="/" passHref><FooterNav>Contact</FooterNav></Link>
                    <Link href="/" passHref><FooterNav>Pregled</FooterNav></Link>
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