import React from "react";
import { TextInputProps } from "react-native";

import { InputContainer, IsTextArea } from "./styles";

type Props = TextInputProps & {
  type?: IsTextArea;
  dateAndHour?: IsTextArea;
};

export function Input({ type, ...rest }: Props) {
  return (
    <>
      <InputContainer type={type} {...rest} as={InputContainer} />
    </>
  );
}
