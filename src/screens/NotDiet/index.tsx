import React from "react";

import { Container, Title, Description, Strong, Image } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";

import ImageNotDiet from "@assets/Illustration-Notdiet.png";

export function NotDiet() {
  return (
    <Container>
      <Title>Que pena!</Title>
      <Description>
        Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
        esforçando e não desista!
      </Description>

      <Image
        source={ImageNotDiet}
        alt="Imagem de um homem sentado com o anti-braço esquerdo para cima"
      />

      <ButtonIcon title="Ir para página inicial" />
    </Container>
  );
}
