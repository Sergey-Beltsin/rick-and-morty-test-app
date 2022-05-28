import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.blocks};
  border: none;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.text};

  transition: 0.2s ease;

  &:not(:disabled) {
    cursor: pointer;

    &:hover {
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
    }
  }

  &:disabled {
    opacity: 0.5;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
