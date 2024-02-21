import { Button } from "@mui/material";
import { BsKeyFill } from "react-icons/bs";

export default function KeyButton({ onClick, title }: any) {
  const style = {
    height: "50px",
    fontWeight: "bold",
    backgroundColor: "green",
  };
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={style}
      startIcon={<BsKeyFill />}
    >
      {title}
    </Button>
  );
}
