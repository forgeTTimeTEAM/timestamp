import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useFormContext } from "react-hook-form";

import { StyledContainer } from "./styles";

interface IInputFields {
  [key: string]: string;
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  name: string;
  label?: string;
}

const InputField = ({ children, name, label, ...inputProps }: IInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IInputFields>();
  const { onChange } = register(name);
  const [value, SetValue] = useState("");

  const active = !!value ? true : false;
  const icons = children ? (Array.isArray(children) ? children.length : 1) : 0;
  const fieldError = errors[name];

  const errorRef = useRef<HTMLSpanElement>(null);

  const handlerChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    SetValue(e.target.value);
    onChange(e);
  };

  return (
    <StyledContainer
      withIcon={icons}
      active={active}
      hasLabel={!!label}
      hasError={!!errors}
    >
      <div className="inputContainer">
        {!!label && <label htmlFor={name}>{label}</label>}
        <div>
          <input
            id={name}
            type="text"
            {...inputProps}
            {...register(name)}
            onChange={handlerChange}
          />
          {children}
        </div>
      </div>
      {!!fieldError && (
        <div className="errorContainer">
          <span ref={errorRef}>{fieldError.message}</span>
        </div>
      )}
    </StyledContainer>
  );
};

export default InputField;
