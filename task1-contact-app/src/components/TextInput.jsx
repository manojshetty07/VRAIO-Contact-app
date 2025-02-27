import React, { useState } from "react";

export default function TextInput({
  type,
  placeholder,
  name,
  required,
  pattern,
  Msg,
  inputRef,
  value,
}) {
  const [val, setVal] = useState(value);

  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      required={required || false}
      pattern={pattern}
      title={Msg}
      ref={inputRef}
      value={val || ""}
      onChange={(e) => setVal(e.target.value)}
      className="input-field"
    />
  );
}
