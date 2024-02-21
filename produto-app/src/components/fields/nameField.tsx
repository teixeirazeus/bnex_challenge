import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function NameField({ register, name, errors }: any) {
  return (
    <div>
      <InputLabel>Nome:</InputLabel>
      <TextField
        fullWidth
        id={name}
        type="text"
        {...register(name, { required: true })}
        autoComplete="off"
        error={errors[name] as unknown as boolean}
        helperText={errors[name] && "Nome é obrigatório."}
      />
    </div>
  );
}

export default NameField;
