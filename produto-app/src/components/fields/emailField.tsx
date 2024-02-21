import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function EmailField({ register, name, errors, hasLabel = true }: any) {
  return (
    <div>
      {hasLabel && <InputLabel>E-mail:</InputLabel>}
      <TextField
        fullWidth
        id={name}
        type="email"
        {...register(name, { required: true })}
        autoComplete="off"
        error={errors[name] as unknown as boolean}
        helperText={errors[name] && "E-mail é obrigatório."}
      />
    </div>
  );
}

export default EmailField;
