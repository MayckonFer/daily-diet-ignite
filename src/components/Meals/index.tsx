import React from "react";
import { TouchableOpacityProps } from "react-native";

import { IsDietTypeStyleProps } from "@utils/statusDiet";

import {
  Container,
  Hour,
  Snack,
  Status,
  WrapperMeals,
  Divider,
} from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  meal: string;
  type: IsDietTypeStyleProps;
};

export function Meals({ hour, meal, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Divider />
      <WrapperMeals>
        <Snack numberOfLines={1}>{meal}</Snack>
        <Status type={type} />
      </WrapperMeals>
    </Container>
  );
}
