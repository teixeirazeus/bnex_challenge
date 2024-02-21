import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

function PasswordField({ register, name, errors, title }: any) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <InputLabel>{title !== undefined ? title : "Senha"}</InputLabel>
      <TextField
        type={showPassword ? "text" : "password"}
        id={name}
        {...register(name, { required: true })}
        fullWidth
        autoComplete="off"
        error={errors[name] as unknown as boolean}
        helperText={errors[name] && "Campo obrigatório"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword} edge="end">
                {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default PasswordField;
