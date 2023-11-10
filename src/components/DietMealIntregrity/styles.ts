import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

import { IsDietProps } from "@utils/statusDiet";

export const Container = styled(TouchableOpacity)<IsDietProps>`
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

export const Icon = styled(ArrowUpRight).attrs<IsDietProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "ISDIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)`
  position: absolute;
  right: 8px;
  top: 8px;
`;
