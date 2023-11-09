import React from "react";

import { IsDietTypeStyleProps } from "@utils/statusDiet";

import { Pencil } from "phosphor-react-native";

import {
  Container,
  Hour,
  Snack,
  Status,
  WrapperMeals,
  Divider,
  EditMeal,
  IconEdit,
} from "./styles";

type Props = {
  hour: string;
  meal: string;
  type: IsDietTypeStyleProps;
};

export function Meals({ hour, meal, type }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Divider />
      <WrapperMeals>
        <Snack>{meal}</Snack>
        <Status type={type} />
      </WrapperMeals>

      <EditMeal>
        <IconEdit weight="fill" />
      </EditMeal>
    </Container>
  );
}
