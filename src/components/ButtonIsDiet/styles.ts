import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Circle } from "phosphor-react-native";

import { IsDietProps } from "@utils/statusDiet";

export const ContainerButton = styled(TouchableOpacity)<IsDietProps>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 6px;
  width: 159px;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:focus {
    background-color: ${({ theme, type }) =>
      type === "ISDIET" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border: 1px solid
      ${({ theme, type }) =>
        type
          ? type === "ISDIET"
            ? theme.COLORS.GREEN_DARK
            : theme.COLORS.RED_DARK
          : ""};
  }
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Icon = styled(Circle).attrs<IsDietProps>(({ theme, type }) => ({
  size: 8,
  color: type === "ISDIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  weight: "fill",
}))``;
