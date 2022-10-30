import * as yup from "yup";
import { ILoginFields } from "../LoginForm";

const loginSchema: yup.SchemaOf<ILoginFields> = yup.object().shape({
  email: yup
    .string()
    .required("Preencha o campo email")
    .email("Formato de email inválido"),
  password: yup.string().required("Preencha o campo senha"),
});

export { loginSchema };
