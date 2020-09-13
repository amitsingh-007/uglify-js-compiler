import { TextField } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import React from "react";
import { INPUT_HEIGHT } from "../constants";
import { TextContainer } from "./TextContainer";

const CLEAR_ICON = <BlockIcon />;

export const CodeInput = ({ inputCodeRef, compiledOutputRef }) => {
  const handleClear = () => {
    inputCodeRef.current.value = "";
    compiledOutputRef.current.value = "";
  };

  return (
    <TextContainer
      onButtonClick={handleClear}
      buttonIcon={CLEAR_ICON}
      buttonTitle="Clear"
    >
      <TextField
        label="Your Code"
        id="outlined-margin-normal"
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        rows={INPUT_HEIGHT}
        inputRef={inputCodeRef}
      />
    </TextContainer>
  );
};
