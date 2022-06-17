import React from 'react';
import styled from 'styled-components';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {
    currentPage: number;
    totalPage: number;
    numberOfItems: number;
    setPage: (page: number) => void;
};
/* <Pagination/> =========================================================== */
const Page = styled.button<{ isActive: boolean }>`
    background: ${({ isActive }) => isActive && 'skyblue'};
    outline: none;
    border: none;
    margin: 5px;
`;
export default function Pagination({
    currentPage,
    totalPage,
    numberOfItems,
    setPage,
}: Prop) {
    if (totalPage === 0 || currentPage < 0) return null;
    const createPage = () => {
        const startPageNumber =
            Math.ceil((currentPage + 1) / numberOfItems) * numberOfItems -
            numberOfItems;
        const pages = Array(numberOfItems)
            .fill('')
            .map((item, idx) => {
                if (idx + 1 + startPageNumber > totalPage) return 0;
                return idx + 1 + startPageNumber;
            })
            .filter((item) => item);

        return pages;
    };

    const _onClickPage = (page: number) => {
        setPage(page - 1);
    };

    const _onClickPrev = () => {
        setPage(currentPage - 1);
    };
    const _onClickNext = () => {
        setPage(currentPage + 1);
    };

    const renderPageItem = createPage().map((item, idx) => {
        return (
            <Page
                isActive={item - 1 === currentPage}
                onClick={() => _onClickPage(item)}
                key={idx}
            >
                {item}
            </Page>
        );
    });

    return (
        <div>
            <button onClick={_onClickPrev}>이전</button>
            {renderPageItem}
            <button onClick={_onClickNext}>다음</button>
        </div>
    );
}
Pagination.defaultProps = {};
