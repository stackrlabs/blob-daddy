import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { CaretUpDown } from "@phosphor-icons/react/dist/ssr";
import { Chain } from "../constants";

interface DASelectorProps {
  selectedTab: Chain;
  setSelectedTab: React.Dispatch<React.SetStateAction<Chain>>;
}

export const DASelector: React.FC<DASelectorProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="text-teal-primary w-3/4 relative">
      <Listbox value={selectedTab} onChange={setSelectedTab}>
        <div>
          <Listbox.Button className="flex items-center cursor-pointer justify-between w-full rounded-bl-lg bg-grey-elevation-4 py-2 px-3 z-10">
            <span>{selectedTab}</span>
            <CaretUpDown size={12} />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute bottom-full mb-1 w-fit rounded-md bg-grey-elevation-4 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
              {Object.values(Chain).map((chain, chainIndex) => (
                <Listbox.Option
                  key={chainIndex}
                  className={({ active }) =>
                    `flex relative cursor-pointer select-none py-1 px-3 ${
                      active ? "text-teal-primary" : "text-white"
                    }`
                  }
                  value={chain}
                >
                  {({ selected }) => (
                    <div
                      className={`flex gap-3 w-full px-4 py-1 ${
                        selected && "bg-teal-primary bg-opacity-25 rounded-md"
                      }`}
                    >
                      {selected ? (
                        <span className="flex items-center min-w-3 text-white">
                          <Check size={12} />
                        </span>
                      ) : (
                        <div className="min-w-3" />
                      )}
                      <span
                        className={` ${
                          selected ? "font-medium " : "font-normal"
                        }`}
                      >
                        {chain}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
