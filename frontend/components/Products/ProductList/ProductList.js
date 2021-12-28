import React, {useMemo} from 'react';
import {
    ProductBrand,
    ProductCard,
    ProductModel,
    ProductHeading,
    ProductImage,
    ProductInformation,
    ProductListContainer,
    ProductsContainer,
    ResultsContainer,
    SearchBar,
    SearchContainer,
    SearchResult,
    SearchResultImage,
    SearchResultText,
    SearchSection,
    ProductHeader,
    ProductButton
} from "./ProductList.elements";
import Link from "next/link";
import {useState} from "react";
import {PathLink} from "../SingleProduct/SingleProduct.elements";
import Pagination from "../../Pagination/Pagination";

const ProductList = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const data = props.products.list;
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    console.log(currentTableData);

    const [search, setSearch] = useState("");
    return (
        <ProductListContainer>
            <ProductHeader>
                <ProductHeading>{props.products.name}</ProductHeading>
                <PathLink><Link href="/">Home</Link> / <Link href="/products">Products</Link></PathLink>
            </ProductHeader>
            <SearchContainer>
                <SearchSection>
                    <SearchBar placeholder="Pretrazi brend ili model.." onChange={(event) => {
                        setSearch(event.target.value);
                    }}/>
                    {
                        search !== "" ? (
                            <ResultsContainer>
                                {
                                    props.products.list.filter((value) => {
                                        if (value.brand.toLowerCase().includes(search.toLowerCase()) || value.model.toLowerCase().includes(search.toLowerCase())){
                                            return value;
                                        }
                                    }).map((product) => (
                                        <Link href={`/products/${props.products.slug}/${product.model}`} key={product.id} passHref>
                                            <SearchResult>
                                                <SearchResultText>{product.brand} - {product.model} </SearchResultText>
                                                <SearchResultImage src={product.image}/>
                                            </SearchResult>
                                        </Link>
                                    ))
                                }
                            </ResultsContainer>
                        ) : ""
                    }
                </SearchSection>
            </SearchContainer>
            <ProductsContainer>
                {

                    currentTableData.map((product) => {
                        return (
                            <ProductCard key={product.id}>
                                <ProductImage src={product.image}/>
                                <ProductInformation>
                                    <ProductBrand>{product.brand}</ProductBrand>
                                    <ProductModel>{product.model}</ProductModel>
                                    <Link href={`/products/${props.products.slug}/${product.model}`} passHref><ProductButton>POGLEDAJ VIŠE</ProductButton></Link>
                                </ProductInformation>
                            </ProductCard>
                        );
                    })
                }
            </ProductsContainer>
            <Pagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </ProductListContainer>
    );
};

export default ProductList;