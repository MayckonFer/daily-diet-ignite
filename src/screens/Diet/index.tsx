import React from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

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

type RouteParams = {
  meal: string;
};

export function Diet() {
  const navigation = useNavigation();

  const route = useRoute();

  const { meal } = route.params as RouteParams;

  function handleEditMeal(meal: string) {
    navigation.navigate("editDiet", { meal });
  }

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
          <ButtonIcon
            title="Editar refeição"
            icon="edit"
            isActive
            onPress={() => handleEditMeal(meal)}
          />
          <ButtonIcon title="Excluir refeição" icon="delete" />
        </WrapperButtonFooter>
      </Container>
    </>
  );
}
