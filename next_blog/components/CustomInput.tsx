import { FunctionBody } from "@/node_modules/typescript/lib/typescript";
import React, { useState } from "react";

interface CustomInputProps {
  name?: string;
  value?: string;
  id?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  textArea?: boolean;
}
const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <div className="flex flex-col w-full ">
      {!props?.textArea ? (
        <input
          {...props}
          className="border-2 border-neutral-400 rounded py-2 px-1"
        />
      ) : (
        <textarea
          {...props}
          className="border-2 border-neutral-400 rounded py-2 px-1"
        />
      )}
    </div>
  );
};

export default CustomInput;
