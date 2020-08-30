import React from "react";
import { TextField, Box } from "@material-ui/core";
import { INPUT_WIDTH, INPUT_HEIGHT } from "../constants";

export const CodeInput = ({ inputCodeRef }) => {
  return (
    <Box width={INPUT_WIDTH}>
      <TextField
        label="Your Code"
        id="outlined-margin-normal"
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        rows={INPUT_HEIGHT}
        inputRef={inputCodeRef}
        data-gramm="false"
      />
    </Box>
  );
};
