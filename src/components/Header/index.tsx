import React from "react";
import { Text } from "react-native";

import { ContainerHeader, Logo, UserImage } from "./styles";

import LogoImg from "@assets/logo.png";
import UserImg from "@assets/user-image.jpg";

export function Header() {
  return (
    <ContainerHeader>
      <Logo source={LogoImg} />

      <UserImage source={UserImg} />
    </ContainerHeader>
  );
}
