import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function MuiDatePicker({
  value,
  setValue,
  disablePast = false,
  label = "",
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        renderInput={(props) => (
          <TextField
            {...props}
            className="no-input-border"
            size="small"
            helperText={props?.InputProps?.placeholder}
          />
        )}
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        disablePast={disablePast}
      />
    </LocalizationProvider>
  );
}
