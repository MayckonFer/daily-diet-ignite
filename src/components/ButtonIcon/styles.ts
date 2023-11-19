import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type IsActiveBackgroundAndBorder = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<IsActiveBackgroundAndBorder>`
  background-color: ${({ theme, isActive }) =>
    !isActive ? "transparent" : theme.COLORS.GRAY_2};
  border-radius: 8px;

  ${({ theme, isActive }) =>
    !isActive
      ? css`
          border: 1px solid ${theme.COLORS.GRAY_1};
        `
      : ""}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  height: 50px;
`;

export const Title = styled.Text<IsActiveBackgroundAndBorder>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
  color: ${({ theme, isActive }) =>
    !isActive ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE};
`;

export const Icon = styled(MaterialIcons).attrs<IsActiveBackgroundAndBorder>(
  ({ theme, isActive }) => ({
    size: 24,
    color: !isActive ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE,
  })
)``;
