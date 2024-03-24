import React from "react";

interface TextBoxProps {
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const TextBox: React.FC<TextBoxProps> = ({
  value,
  placeholder = "",
  setValue,
}) => {
  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <textarea
      className="flex p-4 w-full h-full border placeholder-white-44 items-start border-x-grey-elevation-4 border-y-transparent text-white bg-grey-elevation-1 focus:border-teal-primary outline-none"
      value={value}
      placeholder={placeholder}
      onChange={inputChangeHandler}
      style={{ resize: "none" }}
    />
  );
};
