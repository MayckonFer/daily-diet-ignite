import React, { useState } from "react";
import { Header } from "@components/Header";
import { FlatList } from "react-native";

import {
  ContainerHome,
  ContainerMeals,
  Title,
  WrapperMeals,
  DateTitle,
  HeaderContainerMeals,
} from "./styles";

import { DietMealIntregrity } from "@components/DietMealIntregrity";
import { ButtonIcon } from "@components/ButtonIcon";
import { Meals } from "@components/Meals";
import { ListEmpty } from "@components/ListEmpty/Index";

import { IsDietTypeStyleProps } from "@utils/statusDiet";

interface MealProps {
  hour: string;
  snack: string;
  status: IsDietTypeStyleProps;
}

type MealsDataProps = {
  id: number;
  date: string;
  meal: MealProps[];
};

export function Home() {
  const [dateMeals, setDateMeals] = useState<MealsDataProps[]>([
    {
      id: 1,
      date: "12.08.22",
      meal: [
        {
          hour: "20:00",
          snack: "Banana",
          status: "ISDIET",
        },
        {
          hour: "20:00",
          snack: "X-tudo",
          status: "NOTDIET",
        },
      ],
    },
    {
      id: 2,
      date: "11.08.22",
      meal: [
        {
          hour: "20:00",
          snack: "X-tudo",
          status: "NOTDIET",
        },
        {
          hour: "20:00",
          snack: "X-tudo",
          status: "NOTDIET",
        },
      ],
    },
    {
      id: 3,
      date: "10.08.22",
      meal: [
        {
          hour: "12:30",
          snack: "Salada cesar com frango e alface",
          status: "ISDIET",
        },
        {
          hour: "12:30",
          snack: "Salada cesar com frango e alface",
          status: "ISDIET",
        },
      ],
    },
  ]);

  return (
    <ContainerHome>
      <Header />

      <DietMealIntregrity type="ISDIET" />

      <ContainerMeals>
        <HeaderContainerMeals>
          <Title>Refeições</Title>
          <ButtonIcon icon="add" title="Nova refeição" />
        </HeaderContainerMeals>

        <FlatList
          data={dateMeals}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <WrapperMeals>
              <DateTitle>{item.date}</DateTitle>

              {item.meal.map((meal, index) => (
                <Meals
                  key={index}
                  hour={meal.hour}
                  meal={meal.snack}
                  type={meal.status}
                />
              ))}
            </WrapperMeals>
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Cadastre alguma refeição" />
          )}
          showsVerticalScrollIndicator={false}
        />
      </ContainerMeals>
    </ContainerHome>
  );
}
