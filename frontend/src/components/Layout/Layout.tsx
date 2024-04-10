// Styles import
import { stylesVariables } from "../../styles/variables";

// Libraries import
import React from "react";
import styled from "styled-components";

// Interfaces declaration
interface Props {
  children: React.ReactNode;
}
const Div = styled.div`
  max-width: ${stylesVariables.largeWindow};
  width: 100%;
  margin: 0 auto;
  flex: 1;
  height: 100%;
  padding: 0px 24px;
  box-sizing: border-box;
`;

export const Layout: React.FC<Props> = ({ children }) => {
  return <Div>{children}</Div>;
};
