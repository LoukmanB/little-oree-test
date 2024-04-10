// Libraries import
import React, { MouseEventHandler, forwardRef } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

// Styles import
import { DSColors } from "../../styles/variables";

export interface CTAButtonProps {
  name?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
  size?: "M" | "L";
  isLoading?: boolean;
  type?: "button" | "submit";
  form?: string;
}
const Button = styled.button<CTAButtonProps>`
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
  background-color: ${(props) =>
    props.isDisabled ? "#E9EAEB" : DSColors.AssuranceBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  height: ${(props) => (props.size && props.size === "M" ? "37px" : "48px")};
  padding: ${(props) =>
    props.size && props.size === "M" ? "8px 16px" : "13.5px 24px"};
  cursor: pointer;
  position: relative;
  border: 1px solid
    ${(props) => (props.isDisabled ? "#E9EAEB" : DSColors.AssuranceBlue)};
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => (props.isDisabled ? "#A8AAAF" : "#ffffff")};
  > p {
    white-space: nowrap;
    letter-spacing: 0rem;
  }
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#E9EAEB" : DSColors.AssuranceBlue};
    border: 1px solid
      ${(props) => (props.disabled ? "#A8AAAF" : DSColors.AssuranceBlue)};
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 - No mandatory props
 - Default props are listed below
 **/
export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  (props, ref) => {
    const {
      name = "Primary button",
      onClick,
      isDisabled = false,
      id,
      size,
      isLoading = false,
      type = "button",
      form,
    } = props;

    return (
      <Button
        id={id}
        ref={ref}
        form={form}
        type={type}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        isDisabled={isDisabled}
        size={size}
      >
        {isLoading && (
          <Loader>
            <ReactLoading
              type={"spin"}
              color={"#e4e3e3"}
              height={25}
              width={25}
            />
          </Loader>
        )}
        <p style={isLoading ? { color: "transparent" } : undefined}>{name}</p>
      </Button>
    );
  }
);
