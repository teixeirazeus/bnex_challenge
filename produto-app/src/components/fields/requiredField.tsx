import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function RequiredField({ register, name, title, errors }: any) {
  return (
    <div>
      <InputLabel>{title}</InputLabel>
      <TextField
        fullWidth
        id={name}
        type="text"
        {...register(name, { required: true })}
        autoComplete="off"
        error={errors[name] as unknown as boolean}
        helperText={errors[name] && `${title} é obrigatório.`}
      />
    </div>
  );
}

export default RequiredField;
