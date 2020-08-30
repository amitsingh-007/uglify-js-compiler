import Button from "@material-ui/core/Button";
import React from "react";
import ShuffleIcon from "@material-ui/icons/Shuffle";

const END_ICON = <ShuffleIcon />;

export const CompileButton = ({ inputCodeRef, setInputCode }) => {
  const handleCompile = () => {
    const inputText = inputCodeRef.current.value;
    setInputCode(inputText);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={END_ICON}
      onClick={handleCompile}
    >
      Compile
    </Button>
  );
};
