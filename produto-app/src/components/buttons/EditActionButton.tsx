import Button from "@mui/material/Button";
import { BsFillPencilFill } from "react-icons/bs";

export default function EditActionButton({ onClick }: any) {
  const style = { height: "40px", color: "green", borderColor: "green" };

  return (
    <Button variant="outlined" color="success" style={style} onClick={onClick}>
      <BsFillPencilFill />
    </Button>
  );
}
