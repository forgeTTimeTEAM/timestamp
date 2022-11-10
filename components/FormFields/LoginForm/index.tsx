import { useState } from "react";

import { useRouter } from "next/router";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { BiLowVision, BiShowAlt } from "react-icons/bi";

import InputField from "../Input";

import { StyledLoginForm } from "./styles";
import { loginFormSchema } from "../../../validator";

export interface ILoginFields {
  email: string;
  password: string;
}

function LoginForm() {
  const methods = useForm<ILoginFields>({
    resolver: yupResolver(loginFormSchema),
  });
  const { setFocus } = methods;

  const [seePass, setSeePass] = useState(false);
  const passwordType: "text" | "password" = seePass ? "text" : "password";

  const passwordIcon = seePass ? <BiShowAlt /> : <BiLowVision />;

  return (
    <FormProvider {...methods}>
      <StyledLoginForm onSubmit={(data) => console.log(data)}>
        <div>
          <InputField name="email" label="Email" />
          <InputField name="password" label="Senha" type={passwordType}>
            <button
              className="seeButton"
              type="button"
              onClick={() => {
                setSeePass(!seePass);
                setFocus("password");
              }}
            >
              {passwordIcon}
            </button>
          </InputField>
        </div>
        <button type="submit">Entrar</button>
      </StyledLoginForm>
    </FormProvider>
  );
}

export default LoginForm;
