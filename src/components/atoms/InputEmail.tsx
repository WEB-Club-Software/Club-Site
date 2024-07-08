import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  setter?: (field: string, value: string) => void;
}

const InputEmail = ({ setter, ...props }: Props) => {
  return <div>input Email</div>;
};

export default InputEmail;
