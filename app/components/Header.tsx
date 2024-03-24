interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex gap-3 text-6xl w-full justify-center">
      <span>👨🏻</span>
      <span className="text-fg-primary">go</span>
      <span>-</span>
      <span className="text-teal-primary">DAddy</span>
      <span>👨🏻</span>
    </div>
  );
};
