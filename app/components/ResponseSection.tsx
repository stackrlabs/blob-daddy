"use client";

import { CodeTerminal } from "./CodeTerminal";
import { SectionHeader } from "./SectionHeader";

interface ResponseSectionProps {
  response: string;
}

export const ResponseSection: React.FC<ResponseSectionProps> = ({
  response,
}) => {
  return (
    <div className="flex flex-col h-full w-1/3 rounded-lg">
      <SectionHeader
        heading="Response"
        onHoverText="Daddy returns a receipt for your data."
      />
      <CodeTerminal text={response} rounded="rounded-b-lg" />
    </div>
  );
};
