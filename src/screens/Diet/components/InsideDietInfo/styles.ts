import styled, { css } from "styled-components/native";

import { Circle } from "phosphor-react-native";
import { IsDietProps } from "@utils/statusDiet";

export const InsideDiet = styled.View`
  width: 150px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 999px;
  padding: 8px 16px;
  margin-top: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const TextContent = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Icon = styled(Circle).attrs<IsDietProps>(({ theme, type }) => ({
  size: 8,
  color: type === "ISDIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  weight: "fill",
}))``;
