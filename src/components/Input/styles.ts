import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type IsTextArea = "TEXTAREA" | "ISDATEANDHOUR";

export type InputProps = {
  type: IsTextArea;
};

export const InputContainer = styled(TextInput)<InputProps>`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 6px;

  padding-left: 10px;

  width: ${({ type }) => (type === "ISDATEANDHOUR" ? "153px" : "100%")};
  height: ${({ type }) => (type === "TEXTAREA" ? "100px" : "48px")};

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
