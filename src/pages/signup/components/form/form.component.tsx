import Box from "@mui/material/Box";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import "./form.component.scss";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  function formSubmitHandler(e: any) {
    e.preventDefault();
    console.log("form", username, password);
  }

  return (
    <Box
      component="form"
      className="signup-form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      autoComplete="on"
      onSubmit={formSubmitHandler}
    >
      <TextField
        label="Email"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      ></TextField>

      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <label className="label">
        By clicking Agree & Join, you agree to the LinkedIn User Agreement,
        Privacy Policy, and Cookie Policy.
      </label>
      <button className="button" type="submit">
        Agree & Join
      </button>
    </Box>
  );
}
