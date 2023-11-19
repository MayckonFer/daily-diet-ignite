import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ContainerButton, Icon, TextButton, IsActive } from "./styles";

import { IsDietTypeStyleProps } from "@utils/statusDiet";

type Props = TouchableOpacityProps &
  IsActive & {
    type: IsDietTypeStyleProps;
    name: string;
  };

export function ButtonIsDiet({ isActive = false, name, type, ...rest }: Props) {
  return (
    <ContainerButton
      isActive={isActive}
      type={type}
      {...rest}
      as={ContainerButton}
    >
      <>
        <Icon type={type} as={Icon} />
        <TextButton>{name}</TextButton>
      </>
    </ContainerButton>
  );
}
