import React from "react";

interface Props {
  text: string;
  name: string;
}

const Label: React.FC<Props> = ({ name, text }) => {
  return (
    <label className="text-neutral-600" htmlFor={name}>
      {text}
    </label>
  );
};

export default Label;
