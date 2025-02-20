import React from "react";

const InputField = ({ type, name, value, onChange, placeholder, required, readOnly, accept }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      accept={accept}
      className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 mb-6 border-dotted border-orange-600 rounded-lg focus:outline-none"
    />
  );
};

export default InputField;
