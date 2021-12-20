import React from 'react';
import Navbar from "../../../components/partials/Navbar/Navbar";
import ProductList from "../../../components/Products/ProductList/ProductList";
import Footer from "../../../components/partials/Footer/Footer";

const Index = () => {
    return (
        <div>
            <Navbar color="black" />
            <ProductList />
            <Footer />
        </div>
    );
};

    export default Index;