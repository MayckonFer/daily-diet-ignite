import React from "react";

import { Container, NumberDishs, DescriptionDishs } from "./styles";
import { IsDietTypeStyleProps } from "@utils/statusDiet";

type Props = {
  sequenciDish: number;
  descriptionDish: string;
  type?: IsDietTypeStyleProps;
};

export function Card({ sequenciDish, descriptionDish, type }: Props) {
  return (
    <Container type={type} as={Container}>
      <NumberDishs>{sequenciDish}</NumberDishs>
      <DescriptionDishs>{descriptionDish}</DescriptionDishs>
    </Container>
  );
}
