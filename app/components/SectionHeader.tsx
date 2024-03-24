import { TextInfoBlock } from "./TextInfoBlock";

interface SectionHeaderProps {
  heading: string;
  onHoverText: string;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  onHoverText,
  children,
}) => {
  return (
    <div
      className={
        "flex w-full px-6 py-4 h-14 text-fg-primary items-center justify-between border-b border-white/5 bg-grey-elevation-2"
      }
    >
      <TextInfoBlock text={heading} onHoverText={onHoverText} />
      <div className="flex gap-2 items-center">{children}</div>
    </div>
  );
};
