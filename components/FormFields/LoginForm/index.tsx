import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { BiLowVision, BiShowAlt } from "react-icons/bi";

import InputField from "../Input";
import { loginSchema } from "../validators";

export interface ILoginFields {
  email: string;
  password: string;
}

function LoginForm() {
  const methods = useForm<ILoginFields>({ resolver: yupResolver(loginSchema) });
  const { handleSubmit, setFocus } = methods;
  const [seePass, setSeePass] = useState(false);
  const passwordType: "text" | "password" = seePass ? "text" : "password";

  const passwordIcon = seePass ? <BiShowAlt /> : <BiLowVision />;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputField name="email" label="Email" />
        <InputField name="password" label="Senha" type={passwordType}>
          <button
            type="button"
            onClick={() => {
              setSeePass(!seePass);
              setFocus("password");
            }}
          >
            {passwordIcon}
          </button>
        </InputField>
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
