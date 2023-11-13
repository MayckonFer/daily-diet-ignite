import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ContainerButton, Icon, TextButton } from "./styles";

import { IsDietTypeStyleProps } from "@utils/statusDiet";

type Props = TouchableOpacityProps & {
  type: IsDietTypeStyleProps;
  name: string;
};

export function ButtonIsDiet({ name, type, ...rest }: Props) {
  return (
    <ContainerButton type={type} {...rest} as={ContainerButton}>
      <Icon type={type} as={Icon} />
      <TextButton>{name}</TextButton>
    </ContainerButton>
  );
}
