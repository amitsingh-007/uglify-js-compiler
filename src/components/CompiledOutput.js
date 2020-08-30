import React from "react";
import { TextField, Box } from "@material-ui/core";
import { INPUT_WIDTH, INPUT_HEIGHT } from "../constants";
import { getCompiledCode } from "../utils/compile";

export const CompiledOutput = ({ compiledOutputRef, inputCode }) => {
  return (
    <Box width={INPUT_WIDTH}>
      <TextField
        label="Compiled Code"
        id="outlined-margin-normal"
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        disabled
        rows={INPUT_HEIGHT}
        ref={compiledOutputRef}
        value={getCompiledCode(inputCode)}
      />
    </Box>
  );
};
