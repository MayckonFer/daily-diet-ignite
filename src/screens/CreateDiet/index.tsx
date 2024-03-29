import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native";

import {
  Container,
  Label,
  WrapperInputs,
  ContainerDateAndHour,
  ContainerQuestionIsDiet,
  TextQuestion,
  WrapperButtons,
  ContainerButton,
} from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { ButtonIsDiet } from "@components/ButtonIsDiet";
import { ButtonIcon } from "@components/ButtonIcon";

export function CreateDiet() {
  const [diet, setDiet] = useState("");

  return (
    <>
      <Header name="Nova refeição" />

      <ScrollView>
        <Container>
          <WrapperInputs>
            <Label>Nome</Label>
            <Input />
          </WrapperInputs>

          <WrapperInputs>
            <Label>Descrição</Label>
            <Input type="TEXTAREA" multiline={true} numberOfLines={5} />
          </WrapperInputs>

          <ContainerDateAndHour>
            <WrapperInputs>
              <Label>Data</Label>
              <Input type="ISDATEANDHOUR" />
            </WrapperInputs>

            <WrapperInputs>
              <Label>Hora</Label>
              <Input type="ISDATEANDHOUR" />
            </WrapperInputs>
          </ContainerDateAndHour>

          <ContainerQuestionIsDiet>
            <TextQuestion>Está detro da dieta?</TextQuestion>

            <WrapperButtons>
              <FlatList
                data={["Sim", "Não"]}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <ButtonIsDiet
                    name={item}
                    isActive={item === diet}
                    onPress={() => setDiet(item)}
                    type={item === "Sim" ? "ISDIET" : "NOTDIET"}
                  />
                )}
                horizontal
              />
            </WrapperButtons>
          </ContainerQuestionIsDiet>

          <ContainerButton>
            <ButtonIcon title="Cadastrar refeição" isActive />
          </ContainerButton>
        </Container>
      </ScrollView>
    </>
  );
}
