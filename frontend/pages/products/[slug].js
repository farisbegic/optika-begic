import React from 'react';
import Navbar from "../../components/partials/Navbar/Navbar";
import Footer from "../../components/partials/Footer/Footer";
import ProductList from "../../components/Products/ProductList/ProductList";

const Slug = () => {
    return (
        <div>
            <Navbar color="black" />
            <ProductList />
            <Footer />
        </div>
    );
};

    export default Slug;