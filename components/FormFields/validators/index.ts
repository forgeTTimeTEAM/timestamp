import * as yup from "yup";
import { ILoginFields } from "../LoginForm";

const loginSchema: yup.SchemaOf<ILoginFields> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export { loginSchema };
