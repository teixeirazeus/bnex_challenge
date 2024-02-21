import Button from "@mui/material/Button";
import { BsFillTrashFill } from "react-icons/bs";

export default function DeleteActionButton({ onClick }: any) {
  const style = { height: "40px", color: "red", borderColor: "red" };

  return (
    <Button variant="outlined" style={style} onClick={onClick}>
      <BsFillTrashFill />
    </Button>
  );
}
