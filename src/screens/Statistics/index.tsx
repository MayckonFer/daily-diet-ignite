import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ContainerStatistics,
  HeaderStatistics,
  Button,
  Icon,
  Title,
  WrapperStatistics,
  WrapperMelsInDiet,
} from "./styles";

import { StatusDiet } from "@components/StatusDiet";
import { Card } from "./components/Card";
import { Header } from "@components/Header";

export function Statistics() {
  const navigation = useNavigation();

  function handleBackHome() {
    navigation.navigate("home");
  }

  return (
    <>
      <HeaderStatistics type="ISDIET">
        <Button onPress={handleBackHome}>
          <Icon type="ISDIET" as={Icon} />
        </Button>

        <StatusDiet porcentage="90,86%" paragraph="das refeições da dieta" />
      </HeaderStatistics>
      <ContainerStatistics>
        <Title>Estatísticas gerais</Title>

        <WrapperStatistics>
          <Card
            sequenciDish={22}
            descriptionDish="melhor sequência de pratos dentro da dieta"
          />
          <Card sequenciDish={109} descriptionDish="refeições registradas" />

          <WrapperMelsInDiet>
            <Card
              sequenciDish={99}
              descriptionDish="refeições dentro da dieta"
              type="ISDIET"
            />
            <Card
              sequenciDish={10}
              descriptionDish="refeições fora da dieta"
              type="NOTDIET"
            />
          </WrapperMelsInDiet>
        </WrapperStatistics>
      </ContainerStatistics>
    </>
  );
}
