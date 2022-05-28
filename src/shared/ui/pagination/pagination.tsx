/* eslint-disable react/no-array-index-key */
import { FC } from "react";

import { Container, PaginationButton } from "./pagination.style";

const getFormattedPages = (pagesCount: number, currentPage: number) => {
  if (pagesCount > 5) {
    if (currentPage === 1 || currentPage === 2) {
      return [1, 2, 3, "...", pagesCount];
    }
    if (currentPage === 3) {
      return [1, 2, 3, 4, "...", pagesCount];
    }
    if (currentPage === pagesCount || currentPage === pagesCount - 1) {
      return [1, "...", pagesCount - 2, pagesCount - 1, pagesCount];
    }
    if (currentPage === pagesCount - 2) {
      return [
        1,
        "...",
        pagesCount - 3,
        pagesCount - 2,
        pagesCount - 1,
        pagesCount,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      pagesCount,
    ];
  }

  return Array.from({ length: pagesCount }, (_, i) => i + 1);
};

type PaginationProps = {
  pagesCount: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  pagesCount,
  currentPage,
  handleChangePage,
}) => {
  const pages = getFormattedPages(pagesCount, currentPage);

  return (
    <Container>
      {pages.map((page, index) => (
        <PaginationButton
          key={`pagination-${page}-${index}`}
          disabled={page === currentPage || page === "..."}
          onClick={() => handleChangePage(page as number)}
        >
          {page}
        </PaginationButton>
      ))}
    </Container>
  );
};
