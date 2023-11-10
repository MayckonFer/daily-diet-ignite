import React from "react";

import { Container, PorcentageDiet, ParagraphDiet } from "./styles";

type Props = {
  porcentage: string;
  paragraph: string;
};

export function StatusDiet({ porcentage, paragraph }: Props) {
  return (
    <Container>
      <PorcentageDiet>{porcentage}</PorcentageDiet>
      <ParagraphDiet>{paragraph}</ParagraphDiet>
    </Container>
  );
}
