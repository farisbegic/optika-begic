import React from 'react';
import {
    CategoriesContainer,
    CategoryCard,
    CategoryImage,
    CategoryImageWrapper, CategoryInformation, CategoryNumber,
    CategoryTitle, ImageOverlay
} from "./Categories.elements";
import {products} from "../../../data/products";
import Link from 'next/link';

const Categories = () => {
    return (
        <CategoriesContainer>
            {
                products.map((category) => {
                    return (
                        <Link href={`/products/${category.slug}`} key={category.id} passHref>
                            <CategoryCard>
                                <CategoryImageWrapper>
                                    <CategoryImage src={category.image} alt=""/>
                                </CategoryImageWrapper>
                                <CategoryInformation>
                                    <CategoryTitle>{category.name}</CategoryTitle>
                                    <CategoryNumber>{category.list.length}</CategoryNumber>
                                </CategoryInformation>
                            </CategoryCard>
                        </Link>
                    )
                })
            }
        </CategoriesContainer>
    );
};

export default Categories;