import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Circle } from "phosphor-react-native";

import { IsDietProps, IsDietTypeStyleProps } from "@utils/statusDiet";

export type IsActive = {
  type: IsDietTypeStyleProps;
  isActive?: boolean;
};

export const ContainerButton = styled(TouchableOpacity)<IsActive>`
  background-color: ${({ theme, type, isActive }) =>
    type
      ? type === "ISDIET"
        ? isActive
          ? css`
              ${theme.COLORS.GREEN_LIGHT}
            `
          : theme.COLORS.GRAY_6
        : isActive
        ? css`
            ${theme.COLORS.RED_LIGHT}
          `
        : theme.COLORS.GRAY_6
      : theme.COLORS.GRAY_6};

  ${({ theme, type, isActive }) =>
    type
      ? type === "ISDIET"
        ? isActive
          ? css`
              border: 1px solid ${theme.COLORS.GREEN_DARK};
            `
          : ""
        : isActive
        ? css`
            border: 1px solid ${theme.COLORS.RED_DARK};
          `
        : ""
      : ""};

  border-radius: 6px;
  width: 159px;
  height: 50px;

  margin-right: 25px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
