import Button from "@mui/material/Button";
import { BsEyeFill } from "react-icons/bs";

export default function ViewActionButton({ onClick }: any) {
  const style = { height: "40px", color: "blue", borderColor: "blue" };

  return (
    <Button variant="outlined" style={style} onClick={onClick}>
      <BsEyeFill />
    </Button>
  );
}
