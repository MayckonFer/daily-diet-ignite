import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  height: 50px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;
