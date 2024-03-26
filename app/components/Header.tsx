import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex gap-3 text-6xl w-full justify-center">
        <span>👨🏻</span>
        <span className="text-fg-primary">blob</span>
        <span className="text-teal-primary">DAddy</span>
        <span>👨🏻</span>
      </div>
      <div className="flex gap-2">
        <span>Fast DA-as-a-Service (DAaaSh) for everyone |</span>
        <Link
          href="https://github.com/stackrlabs/go-daash"
          className="flex flex-row gap-2"
          target="_blank"
        >
          <span className="underline">Run your own</span>
          <Image
            src={"/github-logo.svg"}
            alt="Github Logo"
            width={24}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};
