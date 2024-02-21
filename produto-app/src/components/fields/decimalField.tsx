import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function DecimalField({ register, name, title }: any) {
  const formatPhoneNumber = (value: string) => {
    const cleanedValue = value.replace(/[^0-9,]/g, "");
    const commaCount = cleanedValue.split(",").length - 1;
    if (commaCount > 1) {
      return value.substring(0, value.length - 1);
    }

    return cleanedValue;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);
    event.target.value = formattedValue;
  };

  return (
    <div>
      <InputLabel>{title}</InputLabel>
      <TextField
        id={name}
        type="text"
        {...register(name, { required: false })}
        fullWidth
        onChange={handleInputChange}
        autoComplete="off"
      />
    </div>
  );
}

export default DecimalField;
