import React from "react";
import { Field, ErrorMessage } from "formik";
import { IconType } from "react-icons";

interface IFormikTextInputProps {
  name: string;
  type?: string;
  placeholder: string;
  Icon?: IconType;
}

const InputText = ({
  Icon,
  name,
  type = "text",
  placeholder,
  ...props
}: IFormikTextInputProps) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg my-2 mx-8 p-2">
      {Icon && <Icon className="w-6 h-6 mx-2" />}
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="flex-1 outline-none"
        {...props}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm ml-2"
      />
    </div>
  );
};

export default InputText;
