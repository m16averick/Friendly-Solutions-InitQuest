import React, { useEffect, useState, FC } from "react";

interface IFormFIeld {
    label: any,
    input: any
}
const FormField: FC<IFormFIeld> = ({ label, input }: IFormFIeld) => {
  return (
    <div className="formField">
      <div className="label">{label}</div>
      <div className="input">{input}</div>
    </div>
  );
};

export { FormField };
