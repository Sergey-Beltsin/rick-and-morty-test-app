import { FC, useLayoutEffect } from "react";
import styled from "styled-components";

import "./styles/normalize.css";
import "./styles/style.css";

import { ThemeProvider } from "../shared/lib/theme";
import { CharactersList } from "../entities/character/ui";
import { actions } from "../entities/character/model";
import { Pagination } from "../shared/ui";
import { usePaginationStore } from "../entities/character/model/model";

const { getCharactersFx, handleSetCurrentPage } = actions;

const Container = styled.div`
  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.background};

  color: ${({ theme }) => theme.colors.text};
`;

const Main = styled.main`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;

  @media (min-width: ${({ theme }) => theme.devices.tablet}px) {
    padding: 40px 0;
  }
`;

export const App: FC = () => {
  const { pages, currentPage } = usePaginationStore();

  useLayoutEffect(() => {
    getCharactersFx();
  }, []);

  return (
    <ThemeProvider>
      <Container>
        <Main>
          <CharactersList />
          <Pagination
            pagesCount={pages || 0}
            currentPage={currentPage}
            handleChangePage={handleSetCurrentPage}
          />
        </Main>
      </Container>
    </ThemeProvider>
  );
};
