import { FC } from "react";
import styled from "styled-components";

import { useCharactersStore } from "../model";
import { Card } from "../../../shared/ui";

const Container = styled.section`
  display: grid;
  grid-gap: 20px;

  @media (min-width: ${({ theme }) => theme.devices.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CharactersList: FC = () => {
  const characters = useCharactersStore();

  return (
    <Container>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          location={character.location.name}
          firstSeenIn={character.episode.name}
          img={character.image}
        />
      ))}
    </Container>
  );
};
