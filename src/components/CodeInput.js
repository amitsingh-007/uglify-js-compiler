import { TextField } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import React from "react";
import { INPUT_HEIGHT } from "../constants";
import { TextContainer } from "./TextContainer";

const CLEAR_ICON = <BlockIcon />;

export const CodeInput = ({ inputCodeRef }) => {
  const handleClear = () => {
    inputCodeRef.current.value = "";
  };

  return (
    <TextContainer onButtonClick={handleClear} buttonIcon={CLEAR_ICON}>
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
