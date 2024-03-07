import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { CreateDiet } from "@screens/CreateDiet";
import { EditDiet } from "@screens/EditDiet";
import { IsDiet } from "@screens/IsDiet";
import { NotDiet } from "@screens/NotDiet";
import { Diet } from "@screens/Diet";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="createDiet" component={CreateDiet} />
      <Screen name="editDiet" component={EditDiet} />
      <Screen name="isDiet" component={IsDiet} />
      <Screen name="notDiet" component={NotDiet} />
      <Screen name="diet" component={Diet} />
    </Navigator>
  );
}
