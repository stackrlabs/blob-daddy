interface LabelTextDisplayProps {
  label: string;
  text: string;
}

export const LabelTextDisplay: React.FC<LabelTextDisplayProps> = ({
  label,
  text,
}) => {
  return (
    <div className="flex items-center w-full">
      <span className="flex text-black bg-success-primary text-sm h-full px-3 py-2">
        {label}
      </span>
      <span className="flex text-white items-center px-4 text-md bg-grey-elevation-4 w-full h-full underline">
        {text}
      </span>
    </div>
  );
};
