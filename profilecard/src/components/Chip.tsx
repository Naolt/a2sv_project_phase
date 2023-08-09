import React from "react";

interface Props {
  text: string;
}

const Chip: React.FC<Props> = ({ text }) => {
  return <div className="chip">{text}</div>;
};

export default Chip;
