interface PrimaryButtonProps {
  text: string | React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 flex-1 rounded-rb-lg text-black ${
        disabled ? "cursor-not-allowed bg-teal-primary-3" : "cursor-pointer bg-teal-primary/80"
      }`}
    >
      {text}
    </button>
  );
};
