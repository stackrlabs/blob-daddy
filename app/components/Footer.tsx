interface FooterProps {
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full">{children}</div>
  );
};
