import { forwardRef } from "react";
import { CustomInputProps } from "../types/customInput";

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type, value, onChange, placeholder, dirty }, ref) => {
    return (
      <input
        style={{ border: dirty }}
        ref={ref}
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
);

export default CustomInput;
