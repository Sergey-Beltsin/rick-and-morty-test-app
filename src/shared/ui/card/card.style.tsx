import styled from "styled-components";

import { CharacterStatus } from "../../lib/types";

const getColorByStatus = (
  status: CharacterStatus,
): "grey" | "green" | "red" => {
  if (status === CharacterStatus.Unknown) {
    return "grey";
  }

  if (status === CharacterStatus.Alive) {
    return "green";
  }

  return "red";
};

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.blocks};
  border-radius: 8px;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: ${({ theme }) => theme.devices.wideMobile}px) {
    display: flex;
  }
`;

export const Img = styled.img`
  width: 100%;

  border-radius: 8px 8px 0 0;

  @media (min-width: ${({ theme }) => theme.devices.wideMobile}px) {
    max-width: 170px;

    border-radius: 8px 0 0 8px;
  }
`;

export const Content = styled.div`
  padding: 10px;
`;

export const Title = styled.span`
  display: block;

  margin-bottom: 4px;

  font-size: 18px;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.devices.tablet}px) {
    font-size: 26px;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
`;

export const Status = styled.span<{ status: CharacterStatus }>`
  display: block;

  position: relative;
  bottom: 1px;

  width: 8px;
  height: 8px;

  background-color: ${({ theme, status }) =>
    theme.colors[getColorByStatus(status)]};
  border-radius: 100px;
`;

export const StatusText = styled.span`
  display: block;

  margin-left: 6px;

  font-size: 14px;
`;

export const Block = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BlockLabel = styled.span`
  display: block;

  margin-bottom: 6px;

  color: ${({ theme }) => theme.colors.textOpacity};
  font-size: 14px;
`;

export const Text = styled.span`
  display: block;

  font-size: 14px;
`;
