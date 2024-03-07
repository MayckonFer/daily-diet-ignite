import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import {
  ContainerHeader,
  Logo,
  UserImage,
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

import LogoImg from "@assets/logo.png";
import UserImg from "@assets/user-image.jpg";

interface MealProps {
  hour: string;
  title: string;
  status: IsDietTypeStyleProps;
}

type MealsDataProps = {
  date: string;
  meal: MealProps[];
};

export function Home() {
  const [meals, setMeals] = useState<MealsDataProps[]>([
    {
      date: "12.08.22",
      meal: [
        {
          hour: "20:00",
          title: "Banana",
          status: "ISDIET",
        },
        {
          hour: "20:00",
          title: "X-tudo",
          status: "NOTDIET",
        },
      ],
    },
    {
      date: "11.08.22",
      meal: [
        {
          hour: "20:00",
          title: "X-tudo",
          status: "NOTDIET",
        },
        {
          hour: "20:00",
          title: "X-tudo",
          status: "NOTDIET",
        },
      ],
    },
    {
      date: "10.08.22",
      meal: [
        {
          hour: "12:30",
          title: "Salada cesar com frango e alface",
          status: "ISDIET",
        },
        {
          hour: "12:30",
          title: "Salada cesar com frango e alface",
          status: "ISDIET",
        },
      ],
    },
  ]);

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("createDiet");
  }

  function handleStatistics() {
    navigation.navigate("statistics");
  }

  function handleMeal(meal: string) {
    navigation.navigate("diet", { meal });
  }

  return (
    <ContainerHome>
      <ContainerHeader>
        <Logo source={LogoImg} />

        <UserImage source={UserImg} />
      </ContainerHeader>

      <DietMealIntregrity type="ISDIET" onPress={handleStatistics} />

      <ContainerMeals>
        <HeaderContainerMeals>
          <Title>Refeições</Title>
          <ButtonIcon
            icon="add"
            title="Nova refeição"
            isActive
            onPress={handleNewMeal}
          />
        </HeaderContainerMeals>

        <FlatList
          data={meals}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <WrapperMeals>
              <DateTitle>{item.date}</DateTitle>

              {item.meal.map((meal, index) => (
                <Meals
                  key={index}
                  hour={meal.hour}
                  meal={meal.title}
                  type={meal.status}
                  onPress={() => handleMeal(meal.title)}
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
