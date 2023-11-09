import styled from "styled-components/native";
import { IsDietProps } from "@utils/statusDiet";

export const Container = styled.View<IsDietProps>`
  background-color: ${({ theme, type }) =>
    type === "ISDIET" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  margin-top: 32px;
  padding: 20px 16px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 136px;
`;

export const ContainerButton = styled.View`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const PorcentageDiet = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XLG}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const ParagraphDiet = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;
