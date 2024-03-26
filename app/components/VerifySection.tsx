"use client";

import { SectionHeader } from "./SectionHeader";
import { CodeTerminal } from "./CodeTerminal";
import { PrimaryButton } from "./PrimaryButton";
import { InputBox } from "./InputBox";
import { LabelLinkDisplay } from "./LabelLinkDisplay";
import { Switch } from "@headlessui/react";
import { Spinner } from "./Spinner";

interface VerifySectionProps {
  jobId: string;
  setJobId: React.Dispatch<React.SetStateAction<string>>;
  verifyResponse: string;
  onVerify: (job_id: string) => void;
  autoRefresh: boolean;
  setAutoRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  pending: boolean;
  explorerLink: string;
}

export const VerifySection: React.FC<VerifySectionProps> = ({
  jobId,
  setJobId,
  verifyResponse,
  onVerify,
  autoRefresh,
  setAutoRefresh,
  pending,
  explorerLink,
}) => {
  const textColour = autoRefresh ? "text-teal-primary" : "text-white-44";
  return (
    <div className="flex flex-col h-full w-1/3 rounded-lg overflow-hidden">
      <SectionHeader
        heading="Verify Job"
        onHoverText="Add your job id to verify your data availability."
      >
        <span className={`${textColour}`}>Auto-refresh</span>
        <Switch
          checked={autoRefresh}
          onChange={setAutoRefresh}
          className={`${
            autoRefresh ? "bg-teal-primary" : "bg-grey-elevation-5"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              autoRefresh ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </SectionHeader>
      <div className="flex">
        <div className="w-3/4 h-full">
          <InputBox
            value={jobId}
            setValue={setJobId}
            placeholder="job_id"
            disabled={autoRefresh}
          />
        </div>
        <PrimaryButton
          text="Verify"
          disabled={autoRefresh}
          onClick={() => {
            onVerify(jobId);
          }}
        />
      </div>
      {autoRefresh && pending && jobId != "" ? (
        <div className="flex flex-col w-full items-center justify-center h-full gap-3 border-x border-grey-elevation-4">
          <Spinner />
          <span className="font-bold">Verifying</span>
        </div>
      ) : (
        <CodeTerminal text={verifyResponse} />
      )}
      <LabelLinkDisplay label="Explorer:" text={explorerLink} />
    </div>
  );
};
