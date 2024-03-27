import Link from "next/link";

interface LabelTextDisplayProps {
  label: string;
  text: string;
}

export const LabelLinkDisplay: React.FC<LabelTextDisplayProps> = ({
  label,
  text,
}) => {
  const explorerBg =
    text == "" ? "bg-success-primary/20" : "bg-success-primary";
  return (
    <div className="flex items-center w-full">
      <span
        className={`flex text-black ${explorerBg} text-sm h-full px-3 py-2 items-center`}
      >
        {label}
      </span>
      <div className="flex text-white items-center px-4 text-md bg-grey-elevation-4 w-full h-full underline overflow-scroll">
        {text != "" && (
          <Link href={text} target="_blank">
            {text}
          </Link>
        )}
      </div>
    </div>
  );
};
