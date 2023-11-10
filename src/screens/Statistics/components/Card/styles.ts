import styled, { css } from "styled-components/native";

import { IsDietTypeStyleProps } from "@utils/statusDiet";

type WidthCardProps = {
  type: IsDietTypeStyleProps;
};

export const Container = styled.View<WidthCardProps>`
  width: ${({ type }) => (type ? "163px" : "100%")};
  height: ${({ type }) => (type ? "107px" : "89px")};

  background-color: ${({ theme, type }) =>
    type
      ? type === "ISDIET"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
  border-radius: 8px;
  padding: 16px;

  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const NumberDishs = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const DescriptionDishs = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
