import { FC } from "react";

import { CharacterStatus } from "../../lib/types";
import {
  Block,
  BlockLabel,
  Container,
  Content,
  Img,
  Status,
  StatusText,
  StatusWrapper,
  Text,
  Title,
} from "./card.style";

type CardProps = {
  name: string;
  status: CharacterStatus;
  species: string;
  location: string;
  firstSeenIn: string;
  img: string;
};

export const Card: FC<CardProps> = ({
  name,
  status,
  species,
  location,
  firstSeenIn,
  img,
}) => (
  <Container>
    <Img src={img} alt={name} />
    <Content>
      <Title>{name}</Title>
      <StatusWrapper>
        <Status status={status} />
        <StatusText>
          {status} - {species}
        </StatusText>
      </StatusWrapper>
      <Block>
        <BlockLabel>Last known location:</BlockLabel>
        <Text>{location}</Text>
      </Block>
      <Block>
        <BlockLabel>First seen in:</BlockLabel>
        <Text>{firstSeenIn}</Text>
      </Block>
    </Content>
  </Container>
);
