import React, { useState } from "react";
import { Info } from "@phosphor-icons/react/dist/ssr/Info";

interface TextInfoBlockProps {
  text: string;
  onHoverText: string;
}

export const TextInfoBlock: React.FC<TextInfoBlockProps> = ({
  text,
  onHoverText,
}) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  return (
    <div className="flex items-center gap-2 relative">
      <span>{text}</span>
      <div
        className="relative"
        onMouseEnter={() => setIsPopoverVisible(true)}
        onMouseLeave={() => setIsPopoverVisible(false)}
      >
        <Info
          className="opacity-[0.32] transition-opacity duration-150"
          size={16}
        />
        <div
          className={`absolute z-10 w-72 p-2 bg-grey-elevation-1 shadow-lg border border-grey-elevation-5 rounded-md transition-opacity duration-300 ${
            isPopoverVisible ? "opacity-100 visible" : "opacity-0 invisible"
          } -translate-x-1/2 left-1/2 mt-2`}
          style={{ top: "100%" }}
        >
          {onHoverText}
        </div>
      </div>
    </div>
  );
};
