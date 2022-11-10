import { useFormContext } from "react-hook-form";

import { IFormProps } from "./interfaces";

function Form({ children, onSubmit, className }: IFormProps) {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {children}
    </form>
  );
}

export default Form;
