import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import { INPUT_WIDTH } from "../constants";
import DoneAllIcon from "@material-ui/icons/DoneAll";

const DONE_ICON = <DoneAllIcon />;

export const TextContainer = ({
  onButtonClick,
  buttonIcon,
  buttonTitle,
  children,
}) => {
  const [icon, setIcon] = useState(buttonIcon);
  const [iconColor, setIconColor] = useState("primary");

  const handleClick = () => {
    onButtonClick();
    setIcon(DONE_ICON);
    setIconColor("secondary");
    setTimeout(() => {
      setIcon(icon);
      setIconColor("primary");
    }, 1000);
  };

  return (
    <Box width={INPUT_WIDTH} position="relative">
      {children}
      <Box position="absolute" right="0" top="16px">
        <Button
          variant="contained"
          color={iconColor}
          size="small"
          startIcon={icon}
          onClick={handleClick}
          title={buttonTitle}
        />
      </Box>
    </Box>
  );
};
