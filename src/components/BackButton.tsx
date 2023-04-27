import { Button } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

function BackButton(): ReactElement {
  const navigate = useNavigate();

  const handleOnCLick = (): void => {
    navigate(-1);
  };

  return (<Button onClick={handleOnCLick}>Go back</Button>);
}

export default BackButton;