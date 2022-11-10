import { ReactNode } from "react";

export interface IFormProps {
  children: ReactNode;
  onSubmit: (...params: any[]) => void;
  className?: string;
}
