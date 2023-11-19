import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Icon, Title, IsActiveBackgroundAndBorder } from "./styles";

type Props = TouchableOpacityProps &
  IsActiveBackgroundAndBorder & {
    icon?: keyof typeof MaterialIcons.glyphMap;
    title: string;
  };

export function ButtonIcon({ isActive, icon, title, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest} as={Container}>
      <Icon isActive={isActive} name={icon} />
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
}
