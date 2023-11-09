import React from "react";
import { Header } from "@components/Header";

import {
  ContainerHome,
  ContainerMeals,
  Title,
  WrapperMeals,
  DateTitle,
} from "./styles";

import { DietMealIntregrity } from "@components/DietMealIntregrity";
import { ButtonIcon } from "@components/ButtonIcon";
import { Meals } from "@components/Meals";

export function Home() {
  return (
    <ContainerHome>
      <Header />

      <DietMealIntregrity type="ISDIET" />

      <ContainerMeals>
        <Title>Refeições</Title>
        <ButtonIcon icon="add" title="Nova refeição" />

        <WrapperMeals>
          <DateTitle>12.08.22</DateTitle>

          <Meals hour="20:00" meal="Creatina" type="ISDIET" />
        </WrapperMeals>
      </ContainerMeals>
    </ContainerHome>
  );
}
