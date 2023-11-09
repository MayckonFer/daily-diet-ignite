import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_1};
`;
