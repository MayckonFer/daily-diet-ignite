import React from "react";

import {
  ContainerStatistics,
  HeaderStatistics,
  Button,
  Icon,
  Title,
  WrapperStatistics,
} from "./styles";
import { StatusDiet } from "@components/StatusDiet";

export function Statistics() {
  return (
    <>
      <HeaderStatistics type="ISDIET">
        <Button>
          <Icon type="ISDIET" as={Icon} />
        </Button>

        <StatusDiet porcentage="90,86%" paragraph="das refeições da dieta" />
      </HeaderStatistics>
      <ContainerStatistics>
        <Title>Estatísticas gerais</Title>

        <WrapperStatistics></WrapperStatistics>
      </ContainerStatistics>
    </>
  );
}
