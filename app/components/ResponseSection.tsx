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
    <div className="flex flex-col h-full w-1/3 rounded-lg overflow-hidden">
      <SectionHeader
        heading="Response Data"
        onHoverText="View and respond to data that has been settled on a DA."
      />
      <CodeTerminal text={response} rounded="rounded-b-lg" />
    </div>
  );
};
