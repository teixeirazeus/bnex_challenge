import Button from "@mui/material/Button";
import { BsPlus } from "react-icons/bs";
import CustomColor from "../../constants/custom_color";

export default function AddButton({ onClick, title }: any) {
  const style = {
    height: "50px",
    backgroundColor: CustomColor.hunterGreenHex,
    color: "white",
  };
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={style}
      startIcon={<BsPlus color="#D0F0C0" />}
    >
      {title}
    </Button>
  );
}
