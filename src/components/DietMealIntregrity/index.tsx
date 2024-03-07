import React from "react";

import { IsDietTypeStyleProps } from "@utils/statusDiet";

import { Container, Icon } from "./styles";
import { StatusDiet } from "@components/StatusDiet";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type: IsDietTypeStyleProps;
};

export function DietMealIntregrity({ type, ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <Icon type={type} as={Icon} />

      <StatusDiet porcentage="90,86%" paragraph="das refeições da dieta" />
    </Container>
  );
}
