import React, {useState} from 'react';
import {
    Button,
    ButtonContainer, ButtonText, InformationContainer,
    PathLink,
    ProductBrand, ProductCategory, ProductDescription, ProductDetails,
    ProductImage, ProductImageMobile,
    ProductInformation,
    ProductModel,
    ProductsContainer, ShareContainer, SocialIcon
} from "./SingleProduct.elements";
import Link from 'next/link';
import {FaFacebookMessenger} from 'react-icons/fa';
import {AiOutlineCopy} from 'react-icons/ai';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    ViberShareButton,
    WhatsappShareButton,
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    ViberIcon,
    WhatsappIcon,
} from "react-share";

const SingleProduct = (prop) => {
    const shareUrl = window.location.href;
    const [copied, setCopied] = useState(false);
    const copy = () => {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }
    return (
        <ProductsContainer>
            <ProductImage src={prop.product.image} alt="product"/>
            <ProductInformation>
                <InformationContainer>
                    <PathLink><Link href="/">Home</Link> / <Link href="/products">Products</Link> / <Link href={`/products/${prop.categorySlug}`}>{prop.categoryName}</Link></PathLink>
                    <ProductDetails>
                        <ProductBrand>{prop.product.brand}</ProductBrand>
                        <ProductModel>{prop.product.model}</ProductModel>
                        <ProductImageMobile src={prop.product.image} alt="product"/>
                        <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper semper morbi feugiat porta cras feugiat in pellentesque. In quis ultrices dignissim adipiscing cursus euismod curabitur imperdiet congue. Accumsan donec consectetur pharetra, amet cursus sit. Pulvinar duis cras neque aliquet sed cursus aliquam auctor nulla. Fusce augue vitae felis, volutpat. Sem purus turpis blandit viverra.</ProductDescription>
                        <ProductCategory>Category: {prop.categoryName}</ProductCategory>
                        <ProductDescription>Ukoliko imate pitanje za ovaj artikal, kopirajte link i pošaljite upit na našu Facebook Stranicu.</ProductDescription>
                    </ProductDetails>
                    <ButtonContainer>
                        <Button onClick={copy}>
                            <AiOutlineCopy color={"000"} />
                            <ButtonText>{!copied ? "Copy link" : "Copied!"}</ButtonText>
                        </Button>
                        <Button href="https://m.me/optikabegic" target="_blank" rel="noreferrer">
                            <FaFacebookMessenger color={"000"} />
                            <ButtonText>MESSAGE</ButtonText>
                        </Button>
                    </ButtonContainer>
                </InformationContainer>
                <ShareContainer>
                    <SocialIcon>
                        <EmailShareButton url={shareUrl}>
                            <EmailIcon round size={42}/>
                        </EmailShareButton>
                    </SocialIcon>
                    <SocialIcon>
                        <FacebookShareButton url={shareUrl} hashtag={"#optikabegic"}>
                            <FacebookIcon round size={42}/>
                        </FacebookShareButton>
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterShareButton url={shareUrl}>
                            <TwitterIcon round size={42}/>
                        </TwitterShareButton>
                    </SocialIcon>
                    <SocialIcon>
                        <ViberShareButton url={shareUrl}>
                            <ViberIcon round size={42}/>
                        </ViberShareButton>
                    </SocialIcon>
                    <SocialIcon>
                        <WhatsappShareButton url={shareUrl}>
                            <WhatsappIcon round size={42}/>
                        </WhatsappShareButton>
                    </SocialIcon>
                </ShareContainer>
            </ProductInformation>
        </ProductsContainer>
    );
};

export default SingleProduct;