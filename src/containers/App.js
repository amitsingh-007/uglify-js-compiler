import React, { useRef, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { CodeInput } from "../components/CodeInput";
import { CompiledOutput } from "../components/CompiledOutput";
import { CompileButton } from "../components/CompileButton";
import "fontsource-roboto";

function App() {
  const inputCodeRef = useRef(null);
  const compiledOutputRef = useRef(null);
  const [inputCode, setInputCode] = useState("");

  return (
    <>
      <Box textAlign="center" pt={2}>
        <Typography variant="h2" component="h2" gutterBottom>
          Uglify Javascript Compiler
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        width="100%"
        height="100%"
      >
        <CodeInput
          inputCodeRef={inputCodeRef}
          compiledOutputRef={compiledOutputRef}
        />
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
    </>
  );
}

export default App;
