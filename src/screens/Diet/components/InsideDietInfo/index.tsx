import React from "react";
import { Icon, InsideDiet, TextContent } from "./styles";
import { IsDietTypeStyleProps } from "@utils/statusDiet";

export { Icon, InsideDiet } from "./styles";

type Props = {
  type: IsDietTypeStyleProps;
};

export function InsideDietInfo({ type }: Props) {
  return (
    <InsideDiet>
      <Icon type={type} as={Icon} />

      <TextContent>
        {type === "ISDIET" ? "dentro da dieta" : "fora da dieta"}
      </TextContent>
    </InsideDiet>
  );
}
