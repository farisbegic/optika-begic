import React from 'react';
import { usePagination, DOTS } from './usePagination';
import {PaginationArrow, PaginationBar, PaginationElement} from "./Pagination.elements";
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 3,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    console.log(paginationRange);
    return (
        <PaginationBar>
            {/* Left navigation arrow */}
            <PaginationArrow onClick={onPrevious}>
                <BsArrowLeftShort />
            </PaginationArrow>
            {paginationRange.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <PaginationElement>&#8230;</PaginationElement>
                }

                // Render our Page Pills
                return (
                    <PaginationElement
                        className={{selected: pageNumber === currentPage}}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </PaginationElement>
                );
            })}
            {/*  Right Navigation arrow */}
            <PaginationArrow onClick={onNext}>
                <BsArrowRightShort />
            </PaginationArrow>
        </PaginationBar>
    );
};

export default Pagination;