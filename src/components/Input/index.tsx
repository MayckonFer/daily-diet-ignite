import React from "react";

import { InputContainer, IsTextArea } from "./styles";

type Props = {
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
