import React from "react";
import { TouchableOpacityProps } from "react-native";

import { IsDietTypeStyleProps, IsDietProps } from "@utils/statusDiet";

import { Container, Icon } from "./styles";
import { StatusDiet } from "@components/StatusDiet";

type Props = TouchableOpacityProps & {
  type: IsDietTypeStyleProps;
};

export function DietMealIntregrity({ type, ...rest }: IsDietProps) {
  return (
    <Container {...rest} type={type}>
      <Icon type={type} as={Icon} />

      <StatusDiet porcentage="90,86%" paragraph="das refeições da dieta" />
    </Container>
  );
}
