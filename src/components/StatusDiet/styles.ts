import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const PorcentageDiet = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XLG}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const ParagraphDiet = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
