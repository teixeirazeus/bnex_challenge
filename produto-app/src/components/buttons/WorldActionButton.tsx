import { IconButton } from "@mui/material";
import { BsGlobe } from "react-icons/bs";

export default function WorldActionButton({ onClick }: any) {
  const style = { height: "50px" };
  return (
    <IconButton style={style} onClick={onClick}>
      <BsGlobe />
    </IconButton>
  );
}
