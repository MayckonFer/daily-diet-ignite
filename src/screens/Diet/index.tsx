import React from "react";
import { Text } from "react-native";

import {
  Container,
  Wrapper,
  Title,
  Description,
  DateAndHourTitle,
  DateAndTitleText,
  WrapperButtonFooter,
} from "./styles";

import { Header } from "@components/Header";
import { InsideDietInfo } from "./components/InsideDietInfo";
import { ButtonIcon } from "@components/ButtonIcon";

export function Diet() {
  return (
    <>
      <Header name="Refeição" type="ISDIET" />

      <Container>
        <Wrapper>
          <Title>Sanduíche</Title>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>
        </Wrapper>

        <Wrapper>
          <DateAndHourTitle>Data e hora</DateAndHourTitle>
          <DateAndTitleText>12/08/2022 às 16:00</DateAndTitleText>
        </Wrapper>

        <InsideDietInfo type="ISDIET" />

        <WrapperButtonFooter>
          <ButtonIcon title="Editar refeição" icon="edit" isActive />
          <ButtonIcon title="Excluir refeição" icon="delete" />
        </WrapperButtonFooter>
      </Container>
    </>
  );
}
