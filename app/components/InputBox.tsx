interface InputBoxProps {
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

export const InputBox: React.FC<InputBoxProps> = ({
  value,
  placeholder,
  setValue,
  disabled = false,
}) => {
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="h-full w-full p-2 border border-x-grey-elevation-4 border-b-grey-elevation-4 border-t-transparent text-white-44 bg-grey-elevation-1 focus:border-teal-primary outline-none"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={inputChangeHandler}
    />
  );
};
