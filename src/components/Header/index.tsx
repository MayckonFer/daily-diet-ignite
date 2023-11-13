import React from "react";

import { ContainerHeader, Icon, TextHeader, ButtonBack } from "./styles";
import { IsDietTypeStyleProps } from "@utils/statusDiet";

type Props = {
  name: string;
  type?: IsDietTypeStyleProps;
};

export function Header({ name, type }: Props) {
  return (
    <ContainerHeader type={type} as={ContainerHeader}>
      <ButtonBack>
        <Icon />
      </ButtonBack>

      <TextHeader>{name}</TextHeader>
    </ContainerHeader>
  );
}
