import Button from "@material-ui/core/Button";
import React from "react";
import ShuffleIcon from "@material-ui/icons/Shuffle";

export const CompileButton = () => (
  <Button variant="contained" color="primary" endIcon={<ShuffleIcon />}>
    Compile
  </Button>
);
