import JSONPretty from "react-json-pretty";

const theme = {
  main: "line-height:1.3;color:#66d9ef;overflow:auto;",
  error: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
  key: "color:#f92672;",
  string: "color:#fd971f;",
  value: "color:#a6e22e;",
  boolean: "color:#ac81fe;",
};

interface CodeTerminalProps {
  text: string;
  rounded?: string;
}

export const CodeTerminal: React.FC<CodeTerminalProps> = ({
  text,
  rounded = "",
}) => {
  return (
    <div
      className={`flex w-full h-full bg-grey-default border border-grey-elevation-4 border-t-transparent ${rounded} overflow-scroll p-4`}
    >
      <JSONPretty id="json-pretty" theme={theme} data={text} />
    </div>
  );
};
