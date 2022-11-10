import * as yup from "yup";
import { IUserLogin } from "../Context/UserContext/interface";

export const schemaMarkers = yup.object({
  time_video: yup.string().required("Campo obrigatorio"),
  title: yup.string().required("Campo obrigatorio"),
});

export const loginFormSchema: yup.SchemaOf<IUserLogin> = yup.object().shape({
  email: yup
    .string()
    .required("Por favor, preencha o campo email")
    .email("Formato de email inválido"),
  password: yup.string().required("Por favor preencha o campo senha"),
});

export const signUpStepOneSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor, preencha o campo email")
    .email("Formato de email inválido"),
  name: yup.string().required("Por favor, preencha o campo nome"),
});

export const signUpStepTwoSchema = yup.object().shape({
  password: yup.string().required("Por favor, preencha o campo senha"),
  confirmPassword: yup
    .string()
    .required("Por favor, preencha o campo confirmar senha")
    .oneOf([yup.ref("password")], "Senhas não coincidem"),
});

export const signUpStepThreeSchema = yup.object().shape({
  moduleId: yup.string().required("Por favor, preencha o campo email"),
  groupId: yup.string().required("Por favor, preencha o campo senha"),
});
