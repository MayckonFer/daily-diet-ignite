import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";

import { IsDietProps } from "@utils/statusDiet";

export const HeaderStatistics = styled(SafeAreaView)<IsDietProps>`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  background-color: ${({ theme, type }) =>
    type === "ISDIET" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 24px;

  width: 100%;
  height: 220px;

  position: relative;
`;

export const ContainerStatistics = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 24px;
  margin-top: -34px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const WrapperStatistics = styled.View``;

export const Button = styled(TouchableOpacity)`
  position: absolute;
  top: 80px;
  left: 24px;
`;

export const Icon = styled(ArrowLeft).attrs<IsDietProps>(({ theme, type }) => ({
  size: 24,
  color: type === "ISDIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  wheigth: "fill",
}))``;
