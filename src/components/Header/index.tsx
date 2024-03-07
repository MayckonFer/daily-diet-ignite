import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ContainerHeader, Icon, TextHeader, ButtonBack } from "./styles";
import { IsDietTypeStyleProps } from "@utils/statusDiet";

type Props = {
  name: string;
  type?: IsDietTypeStyleProps;
};

export function Header({ name, type }: Props) {
  const navigation = useNavigation();

  function handleBackHome() {
    navigation.navigate("home");
  }

  return (
    <ContainerHeader type={type} as={ContainerHeader}>
      <ButtonBack onPress={handleBackHome}>
        <Icon />
      </ButtonBack>

      <TextHeader>{name}</TextHeader>
    </ContainerHeader>
  );
}
