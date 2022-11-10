import { useState } from "react";

import { useRouter } from "next/router";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { BiLowVision, BiShowAlt } from "react-icons/bi";

import InputField from "../Input";
import { loginSchema } from "../validators";

import { StyledForm } from "./styles";

export interface ILoginFields {
  email: string;
  password: string;
}

function LoginForm() {
  const methods = useForm<ILoginFields>({ resolver: yupResolver(loginSchema) });
  const { handleSubmit, setFocus } = methods;
  const router = useRouter();

  const [seePass, setSeePass] = useState(false);
  const passwordType: "text" | "password" = seePass ? "text" : "password";

  const passwordIcon = seePass ? <BiShowAlt /> : <BiLowVision />;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit((data) => router.push("/"))}>
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
      </StyledForm>
    </FormProvider>
  );
}

export default LoginForm;
