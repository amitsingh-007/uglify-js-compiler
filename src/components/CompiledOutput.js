import { TextField } from "@material-ui/core";
import React from "react";
import { INPUT_HEIGHT } from "../constants";
import { getCompiledCode } from "../utils/compile";
import { TextContainer } from "./TextContainer";
import FilterNoneIcon from "@material-ui/icons/FilterNone";

const COPY_ICON = <FilterNoneIcon />;

export const CompiledOutput = ({ compiledOutputRef, inputCode }) => {
  const handleCopy = () => {};
  return (
    <TextContainer
      onButtonClick={handleCopy}
      buttonIcon={COPY_ICON}
      buttonTitle="Copy"
    >
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
    </TextContainer>
  );
};
