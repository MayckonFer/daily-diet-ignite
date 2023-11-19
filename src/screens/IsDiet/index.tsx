import React from "react";

import { Container, Title, Description, Strong, Image } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";

import ImageIsDiet from "@assets/Illustration-Isdiet.png";

export function IsDiet() {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Description>
        Você continua <Strong>dentro da dieta</Strong>. Muito bem!
      </Description>

      <Image source={ImageIsDiet} alt="Imagem de uma mulher dançando" />

      <ButtonIcon title="Ir para página inicial" />
    </Container>
  );
}
