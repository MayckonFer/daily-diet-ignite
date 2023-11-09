import React from "react";

import { Button } from "./Button";

import { IsDietTypeStyleProps } from "@utils/statusDiet";

import {
  Container,
  ContainerButton,
  PorcentageDiet,
  ParagraphDiet,
} from "./styles";

type Props = {
  type: IsDietTypeStyleProps;
};

export function DietMealIntregrity({ type }: Props) {
  return (
    <Container type={type}>
      <ContainerButton>
        <Button icon="arrow-upward" type="ISDIET" />
      </ContainerButton>

      <PorcentageDiet>90,86%</PorcentageDiet>
      <ParagraphDiet>das refeições dentro da dieta</ParagraphDiet>
    </Container>
  );
}
