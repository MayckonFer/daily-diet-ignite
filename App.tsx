import React from "react";
import { StatusBar } from "react-native";
import { Text } from "react-native";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { CreateDiet } from "@screens/CreateDiet";
import { IsDiet } from "@screens/IsDiet";
import { NotDiet } from "@screens/NotDiet";
import { Diet } from "@screens/Diet";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Diet /> : <Text>Carregando</Text>}
    </ThemeProvider>
  );
}
