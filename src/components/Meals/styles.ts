import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { IsDietProps } from "@utils/statusDiet";

export const Container = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 8px;
  padding: 14px 12px;
  margin-top: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 49px;
`;

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-right: 12px;
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const WrapperMeals = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-left: 12px;
  width: 100%;
`;

export const Snack = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_2};

  width: 200px;
`;

export const Status = styled.View<IsDietProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type === "ISDIET" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
