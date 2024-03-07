import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  gap: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;

  padding: 24px;
  margin-top: -10px;
`;

export const WrapperInputs = styled.View`
  gap: 5px;
  align-items: flex-start;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const ContainerDateAndHour = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerQuestionIsDiet = styled.View`
  gap: 5px;
`;

export const TextQuestion = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerButton = styled.View`
  margin-top: auto;
`;
