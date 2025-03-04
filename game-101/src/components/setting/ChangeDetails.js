import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  TextField,
} from "@mui/material";

import security from "../../style/security.svg";
import { DeleteButton, SubmitButton } from "../../style/buttonStyle";

/* router: /setting */
export const ChangeDetails = (props) => {
  const [values, setValues] = useState({
    email: "address@email.com",
    username: "Username",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Box
        component="form"
        display="flex"
        sx={{
          height: "100vh",
          overflow: "auto",
        }}
        /* onSubmit={handleSubmit} */
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container sx={{ m: 4 }}>
          <Grid
            container
            maxWidth="md"
            xs={12}
            md={7}
            spacing={3}
            alignItems="center"
          >
            {/* Display username */}
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <CardHeader title="Username" />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    <Grid item md={8} sm={9}>
                      <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        onChange={handleChange}
                        required
                        value={values.username}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={3.2} sm={2.4} sx={{ mt: 2, mb: 1 }}>
                      <SubmitButton variant="contained" type="submit">
                        Submit
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Change Password */}
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <CardHeader subheader="Update Password" title="Password" />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    {/* Enter current password */}
                    <Grid item md={8} sm={9}>
                      <TextField
                        fullWidth
                        label="Current Password"
                        name="curPassword"
                        onChange={handleChange}
                        required
                        variant="outlined"
                        margin="normal"
                      />
                      {/* Enter new password */}
                      <TextField
                        fullWidth
                        label="New Password"
                        name="newPassword"
                        onChange={handleChange}
                        required
                        variant="outlined"
                        margin="normal"
                      />
                      {/* Confirm new password */}
                      <TextField
                        fullWidth
                        label="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        required
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>

                    <Grid item md={3.2} sm={2.4} sx={{ mt: 2, mb: 1 }}>
                      <SubmitButton variant="contained" type="submit">
                        Submit
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Delete User */}
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <CardHeader title="Delete My Account" />
                <Divider />
                <CardContent>
                  <FormControlLabel
                    value="delete-account"
                    control={<Radio />}
                    label="By clicking this, I understand I will delete my
                    account permanently."
                  />
                  <Grid mt={2}>
                    <DeleteButton variant="contained">
                      Delete My Account
                    </DeleteButton>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid
            item
            sm={12}
            md={5}
            alignItems="center"
            justifyContent="center"
            sx={{
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            }}
          >
            <img src={security} width="70%" alt="Banner" />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
