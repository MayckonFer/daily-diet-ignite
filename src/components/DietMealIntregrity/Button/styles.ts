import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { IsDietProps } from "@utils/statusDiet";

export const Container = styled(TouchableOpacity)`
  background-color: transparent;
`;

export const Icon = styled(MaterialIcons).attrs<IsDietProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "ISDIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
