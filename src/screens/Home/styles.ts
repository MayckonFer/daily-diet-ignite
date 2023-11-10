import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ContainerHome = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const ContainerMeals = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const HeaderContainerMeals = styled.View`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const WrapperMeals = styled.View`
  margin-top: 32px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
