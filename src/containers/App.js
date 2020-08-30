import React, { useRef } from "react";
import { Box } from "@material-ui/core";
import { CodeInput } from "../components/CodeInput";
import { CompiledOutput } from "../components/CompiledOutput";
import { CompileButton } from "../components/CompileButton";

function App() {
  const inputCodeRef = useRef(null);
  const compiledOutputRef = useRef(null);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      height="100%"
    >
      <CodeInput inputCodeRef={inputCodeRef} />
      <Box display="flex" flexDirection="column" justifyContent="center">
        <CompileButton />
      </Box>
      <CompiledOutput compiledOutputRef={compiledOutputRef} />
    </Box>
  );
}

export default App;
