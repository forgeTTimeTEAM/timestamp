import InputField from "../../Input";

interface IStepProps {
  curStep: number;
}

function Steps({ curStep }: IStepProps) {
  switch (curStep) {
    case 0:
      return (
        <>
          <InputField name="email" label="Email" />
          <InputField name="name" label="Nome" />
        </>
      );

    case 1:
      return (
        <>
          <InputField name="password" label="Senha" />
          <InputField name="confirmPassword" label="Confirmar senha" />
        </>
      );
    case 2:
      return (
        <>
          <InputField name="moduleId" label="Módulo" />
          <InputField name="groupId" label="Turma" />
        </>
      );
    default:
      return <></>;
  }
}

export default Steps;
