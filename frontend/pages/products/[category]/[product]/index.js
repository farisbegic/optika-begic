import React from 'react';
import {Header} from "../../../../components/globalStyles";
import Footer from "../../../../components/partials/Footer/Footer";
import SingleProduct from "../../../../components/Products/SingleProduct/SingleProduct";
import Navbar from "../../../../components/partials/Navbar/Navbar";

const Index = () => {
    return (
        <>
            <Navbar color="black" />
            <SingleProduct />
            <Footer />
        </>
    );
};

export default Index;