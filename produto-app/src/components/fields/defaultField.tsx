import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function DefaultField({ register, name, title }: any) {
  return (
    <div>
      <InputLabel>{title}</InputLabel>
      <TextField
        fullWidth
        id={name}
        type="text"
        {...register(name, { required: false })}
        autoComplete="off"
      />
    </div>
  );
}

export default DefaultField;
