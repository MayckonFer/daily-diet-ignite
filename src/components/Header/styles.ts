import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { IsDietProps } from "@utils/statusDiet";

export const ContainerHeader = styled(SafeAreaView)<IsDietProps>`
  background-color: ${({ theme, type }) =>
    type
      ? type === "ISDIET"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
  padding: 24px;

  width: 100%;
  height: 164px;

  position: relative;

  flex-direction: row;
  align-items: center;
`;

export const ButtonBack = styled(TouchableOpacity)``;

export const TextHeader = styled.Text`
  text-align: center;
  margin: 0 auto;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))``;
