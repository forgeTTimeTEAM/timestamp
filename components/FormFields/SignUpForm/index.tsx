import { useState, useEffect } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signUpStepOneSchema,
  signUpStepTwoSchema,
  signUpStepThreeSchema,
} from "../../../validator";
import Steps from "./Steps";
import { StyledSignUpForm } from "./styles";
import { useUserContext } from "../../../Context";

function SignUpForm() {
  const steps = [
    useForm({
      resolver: yupResolver(signUpStepOneSchema),
    }),
    useForm({
      resolver: yupResolver(signUpStepTwoSchema),
    }),
    useForm({
      resolver: yupResolver(signUpStepThreeSchema),
    }),
  ];
  const [curStep, setCurStep] = useState(0);
  const [data, setData] = useState({});
  const methods = steps[curStep];

  const submitButtonText =
    curStep === steps.length - 1 ? "Cadastrar" : "Próximo";

  const backStep = () => {
    const previousStep = curStep - 1;
    setCurStep(previousStep);
  };

  const { createUser } = useUserContext();
  const onSubmit = async (curDataFields: any) => {
    if (curStep < steps.length - 1) {
      setData({ ...data, ...curDataFields });
      setCurStep(curStep + 1);
      return methods.reset();
    }

    await createUser({ ...data, ...curDataFields });
  };

  useEffect(() => {
    const keys = Object.keys(data) as (keyof typeof data)[];
    keys.forEach((key) => {
      methods.setValue(key, data[key]);
    });
  }, [curStep, data, methods]);

  return (
    <FormProvider {...methods}>
      <StyledSignUpForm onSubmit={onSubmit}>
        <div>
          <Steps curStep={curStep} />
        </div>
        <div>
          {curStep > 0 && (
            <button type="button" onClick={backStep}>
              Anterior
            </button>
          )}
          <button type="submit">{submitButtonText}</button>
        </div>
      </StyledSignUpForm>
    </FormProvider>
  );
}

export default SignUpForm;
