import React, { useState, useEffect } from "react";
import { Grid, styled, InputLabel, Box, Checkbox } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
const useStyles = makeStyles(() => ({
  fieldNote: {
    borderBottom: " 1px solid #7d7d7d",
    marginBottom: "0",
    paddingBottom: "24px",
    fontSize: "13px !important",
  },
  storeInputContainer: {
    marginTop: "40px",
  },
  storelabel: {
    margin: " 0 0 8px !important",
    display: " inline-block !important",
    fontFamily: "T-Star Pro !important",
    fontSize: "0.75rem !important",
    fontWeight: "600 !important",
    color: "#000 !important",
    lineHeight: "1em !important",
    letterSpacing: "0.05em !important",
    textTransform: "uppercase !important",
    "&:after": {
      content: '"*" !important',
      color: "#e02b27 !important",
      fontSize: "1.2rem !important",
      margin: "0 0 0 5px !important",
    },
  },
  storeinputData: {
    width: "100%",
  },

  signInBox: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "8px 9px !important",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: "#0a0802 !important",
    },
    background: "#faf6ef !important",
    borderRadius: "8px !important",
    border: "1px solid #7d7d7d !important",
    width: "100% !important",
  },
  remeberMe: {
    display: "flex !important",
    margin: "0 0 20px",
    position: "relative !important",
  },
  checkBox: {
    padding: "0 !important",
    "&.css-1ombvec-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
      color: "#0075FF !important",
    },
  },
  rememberLabel: {
    position: "absolute !important",
    fontFamily: "T-Star Pro !important",
    fontSize: " 0.75rem !important",
    lineHeight: "1em !important",
    color: "#000 !important",
    letterSpacing: " 0.05em !important",
    left: "9%",
    top: "30%",
  },
  whatsThis: {
    fontSize: "12px",
    cursor: "help",
  },
}));

export default function StoreSignInForm(props) {
  const classes = useStyles();
  const [userError, setUserError] = useState("");
  const { register, setRegister } = props;
  const handleSubmit = (event) => {
    console.log(event);
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
      <Box className={classes.remeberMe}>
        <Checkbox className={classes.checkBox} />
        <InputLabel className={classes.rememberLabel}>
          Remember me{" "}
          <span className={classes.whatsThis}>
            <strong>What's this?</strong>
          </span>
        </InputLabel>
      </Box>
    </>
  );
}
