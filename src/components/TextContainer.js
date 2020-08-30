import { Box, Button } from "@material-ui/core";
import React from "react";
import { INPUT_WIDTH } from "../constants";

export const TextContainer = ({ onButtonClick, buttonIcon, children }) => {
  return (
    <Box width={INPUT_WIDTH} position="relative">
      {children}
      <Box position="absolute" right="0" top="17px">
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={buttonIcon}
          onClick={onButtonClick}
        />
      </Box>
    </Box>
  );
};
