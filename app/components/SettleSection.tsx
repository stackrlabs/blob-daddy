import { SectionHeader } from "./SectionHeader";
import { TextBox } from "./TextBox";
import { DASelector } from "./DASelector";
import { PrimaryButton } from "./PrimaryButton";
import { Chain } from "../constants";

interface SettleSectionProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  selectedTab: Chain;
  setSelectedTab: React.Dispatch<React.SetStateAction<Chain>>;
  onSettle: (data: string, chain: string) => void;
}

export const SettleSection: React.FC<SettleSectionProps> = ({
  data,
  setData,
  selectedTab,
  setSelectedTab,
  onSettle,
}) => {
  return (
    <div className="flex flex-col h-full w-1/3 rounded-lg overflow-hidden">
      <SectionHeader
        heading="Settle Data"
        onHoverText="Enter data and choose a DA to settle it on, daddy's got it from here."
      />
      <TextBox value={data} setValue={setData} placeholder="Vulcan Rocks" />
      <div className="flex w-full">
        <DASelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <PrimaryButton
          text="Settle"
          disabled={data == ""}
          onClick={() => {
            onSettle(data, selectedTab);
          }}
        />
      </div>
    </div>
  );
};
