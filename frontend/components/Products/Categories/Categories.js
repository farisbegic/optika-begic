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
                        <CategoryCard key={category.id}>
                            <Link href={'/products/' + category.slug} passHref><CategoryTitle>{category.name}</CategoryTitle></Link>
                        </CategoryCard>
                    )
                })
            }
        </CategoriesContainer>
    );
};

export default Categories;