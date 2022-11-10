import React, { useState, useEffect } from "react";

// MUI
import { Grid, styled, InputLabel, Box } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

// Hooks
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

export default function StoreSignInForm(props) {
  const classes = useStyledComponent()
  const [userError, setUserError] = useState("");
  const { register, setRegister } = props;
  const handleSubmit = (event) => {
    console.log(event,);
  };
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      text: "E-Mailadresse",
      value: register.email,
      validators: ["required", "isEmail"],
      errorMessages:["this field is required"]
    },
    {
      id: 2,
      name: "password",
      type: "password",
      text: "Password",
      value: register.password,
      validators:["required", "isPasswordMatch"],
      errorMessages:["this field is required", "password didn't match"]
    },
  ];
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== register.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [register.password]);
  const onRegister = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };

  const onFocusEvent = () => {
    setUserError("");
  };
  useEffect(() => {
    if (userError === "") {
      return;
    } else {
      const timer = setTimeout(() => {
        setUserError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userError]);
  return (
   <>
      <Grid className={classes.fieldNote}>
        Please sign in with your Enlighten email address.
      </Grid>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
      <Box className={classes.storeInputContainer}>
        {inputs.map((datas) => {
          return (
            <>
              <InputLabel className={classes.storelabel}>
                {datas.name}
              </InputLabel>
              <Grid item className={classes.storeinputData}>
                <TextField
                  type={datas.type}
                  name={datas.name}
                  className={classes.signInBox}
                  id={datas.id}
                  value={datas.value}
                  onChange={onRegister}
                  onFocus={onFocusEvent}
                  errorMessages={datas.errorMessages}
                  onKeyDown={(event) => event.stopPropagation()}
                  validators={datas.validators}
                />
              </Grid>
            </>
          );
        })}
      </Box>
      </ValidatorForm>
      {/* <Box className={classes.remeberMe}>
        <Checkbox className={classes.checkBox} />
        <InputLabel className={classes.rememberLabel}>
          Remember me{" "}
          <span className={classes.whatsThis}>
            <strong>What's this?</strong>
          </span>
        </InputLabel>
      </Box> */}
    </>
  );
}
