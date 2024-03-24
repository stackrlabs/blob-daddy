interface FooterProps {
  text: string;
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ text, children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {children}
      {/* <span>{text}</span> */}
    </div>
  );
};
