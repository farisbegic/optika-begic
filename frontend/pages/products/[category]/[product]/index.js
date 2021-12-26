import React, {useEffect, useState} from 'react';
import Footer from "../../../../components/partials/Footer/Footer";
import SingleProduct from "../../../../components/Products/SingleProduct/SingleProduct";
import Navbar from "../../../../components/partials/Navbar/Navbar";
import {useRouter} from "next/router";
import {products} from "../../../../data/products";
import Image from 'next/image';
import {NotFoundContainer} from "../../../../components/globalStyles";
import MetaData from "../../../../components/seo-meta";

const Index = () => {
    const router = useRouter();
    const slug = router.query;

    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProductList(products.filter((category) => category.slug === slug.category));
        products.filter((category) => category.slug === slug.category && setProduct(category.list.filter((product) => product.model === slug.product)));
    }, [slug.category, slug.product])

    return (
        <>
            <MetaData
                path='/products'
                title='Produkti'
                description="Officijelna stranica Optika Begić"
                image='/logo.png'
            />
            <Navbar color="black" />
            {
                product[0] && productList[0] ? (
                    <SingleProduct product={product[0]} categoryName={productList[0].name} categorySlug={productList[0].slug}/>
                ) : <NotFoundContainer><Image src="/notfound.svg" height="300px" width="300px"/></NotFoundContainer>
            }
            <Footer />
        </>
    );
};

export default Index;