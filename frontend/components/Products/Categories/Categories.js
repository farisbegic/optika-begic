import React from 'react';
import {CategoriesContainer, CategoryCard, CategoryLink, CategoryTitle} from "./Categories.elements";
import {Card, Header} from "../../globalStyles";
import {categories} from "../../../data/categories";
import Link from 'next/link';

const Categories = () => {
    return (
        <CategoriesContainer>
            {
                categories.map((category) => {
                    return (
                        <Link href={`/products/${category.slug}`}>
                            <CategoryCard key={category.id}>
                                <CategoryTitle>{category.name}</CategoryTitle>
                            </CategoryCard>
                        </Link>
                    )
                })
            }
        </CategoriesContainer>
    );
};

export default Categories;