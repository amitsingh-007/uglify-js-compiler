import React, { useRef, useState } from "react";
import { Box } from "@material-ui/core";
import { CodeInput } from "../components/CodeInput";
import { CompiledOutput } from "../components/CompiledOutput";
import { CompileButton } from "../components/CompileButton";

function App() {
  const inputCodeRef = useRef(null);
  const compiledOutputRef = useRef(null);
  const [inputCode, setInputCode] = useState("");

  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      width="100%"
      height="100%"
    >
      <CodeInput inputCodeRef={inputCodeRef} />
      <Box display="flex" flexDirection="column" justifyContent="center">
        <CompileButton
          inputCodeRef={inputCodeRef}
          setInputCode={setInputCode}
        />
      </Box>
      <CompiledOutput
        compiledOutputRef={compiledOutputRef}
        inputCode={inputCode}
      />
    </Box>
  );
}

export default App;
