import React from "react";
import { TextField, Box } from "@material-ui/core";
import { INPUT_WIDTH, INPUT_HEIGHT } from "../constants";

export const CompiledOutput = ({ compiledOutputRef }) => {
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
      />
    </Box>
  );
};
