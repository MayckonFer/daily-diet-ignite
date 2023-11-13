import React from "react";

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
  return (
    <>
      <Header name="Nova refeição" />

      <Container>
        <WrapperInputs>
          <Label>Nome</Label>
          <Input />
        </WrapperInputs>

        <WrapperInputs>
          <Label>Descrição</Label>
          <Input type="TEXTAREA" />
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
            <ButtonIsDiet name="Sim" type="ISDIET" />
            <ButtonIsDiet name="Não" type="NOTDIET" />
          </WrapperButtons>
        </ContainerQuestionIsDiet>

        <ContainerButton>
          <ButtonIcon title="Cadastrar refeição" />
        </ContainerButton>
      </Container>
    </>
  );
}
