import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ContainerHome = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const ContainerMeals = styled.View`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-bottom: 8px;
`;

export const WrapperMeals = styled.View`
  margin-top: 32px;
`;

export const DateTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
