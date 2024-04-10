// imgs import
import eyeOff from "../../assets/icons/eye-off.svg";
import eye from "../../assets/icons/eye.svg";

// import React from "react";
import React, { useState } from "react";
// Styles import
import styled from "styled-components";
import { DSColors } from "../../styles/variables";

export interface TextInputProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  autoComplete?: string;
  error?: boolean;
  isDisabled?: boolean;
  type?: string;
  fontSize?: number;
  required?: boolean;
  name?: string;
}

export interface TextInputWrapperProps {
  value?: string;
  error?: boolean;
  isInputOnFocus?: boolean;
  isDisabled?: boolean;
}

export interface ButtonProps {
  isDisabled?: boolean;
  iconType?: string;
}

const InputWrapper = styled.div<TextInputWrapperProps>`
  background-color: ${(props) => (props.isDisabled ? "#F8F8F8" : "#FFFFFF")};
  border: 1px solid
    ${(props) =>
      props.isDisabled
        ? "#44474F"
        : props.error
        ? "#E02819"
        : props.isInputOnFocus
        ? DSColors.AssuranceBlue
        : DSColors.SGLight03};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  max-width: 30rem;
  min-height: 3rem;
  &:hover {
    border: 1px solid
      ${(props) =>
        props.isDisabled
          ? "#44474F"
          : props.error
          ? "#E02819"
          : DSColors.AssuranceBlue};
  }
`;
const Input = styled.input<TextInputProps>`
  background-color: ${(props) => (props.isDisabled ? "#F8F8F8" : "#FFFFFF")};
  margin-left: 0.8rem;
  font-family: "DM sans", sans-serif;
  width: 100%;
  height: 100%;
  font-weight: 400;
  box-sizing: border-box;
  border: none;
  font-size: ${(props) => `${props.fontSize}px`};

  ::placeholder {
    font-size: ${(props) => `${props.fontSize}px`};
  }

  color: ${(props) => (props.error ? "#E02819" : DSColors.OffBlack)};

  &:focus {
    ::placeholder {
      color: transparent;
    }
  }

  text-align: left;

  &::placeholder {
    color: ${(props) => (props.error ? "#E02819" : DSColors.SGLight02)};
    font-family: "DM sans", sans-serif;
    font-size: 1rem;
  }
`;

const Button = styled.button<ButtonProps>`
  margin-top: 0.1rem;
  margin-right: 1rem;
  background: none;
  cursor: ${(props) => (props.isDisabled ? "auto" : "pointer")};
`;

/**
 - No mandatory props
 - Default props are listed below
 **/
export const TextInput: React.FC<TextInputProps> = ({
  value = "",
  onChange,
  placeholder = "Input placeholder",
  autoComplete = "off",
  error = false,
  isDisabled = false,
  type = "text",
  fontSize = 16,
  required = false,
  name,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  return (
    <div>
      <InputWrapper
        isDisabled={isDisabled}
        error={error}
        isInputOnFocus={isInputOnFocus}
      >
        <Input
          required={required}
          fontSize={fontSize}
          isDisabled={isDisabled}
          disabled={isDisabled}
          error={error}
          placeholder={placeholder}
          name={name}
          type={
            type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          value={value}
          autoComplete={autoComplete}
          onChange={onChange}
          onFocus={() => setIsInputOnFocus(true)}
          onBlur={() => setIsInputOnFocus(false)}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <Button
          isDisabled={isDisabled}
          disabled={isDisabled}
          hidden={type === "password" ? false : true}
          onClick={(e) => {
            e.preventDefault();
            if (type === "password") {
              setIsPasswordVisible((prev) => !prev);
            }
          }}
          type="button"
        >
          {type === "password" ? (
            isPasswordVisible ? (
              <img src={eyeOff} alt={"grey opened eye"} />
            ) : (
              <img src={eye} alt={"grey opened eye"} />
            )
          ) : null}
        </Button>
      </InputWrapper>
    </div>
  );
};
