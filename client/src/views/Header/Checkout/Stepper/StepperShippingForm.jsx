import { FormControl, Grid, InputLabel, MenuItem, Select, styled } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const useStyles = makeStyles(() => ({
  inputData: {
    position: " relative",
    cursor: "text",
    paddingLeft: "8px !important",
  },
  inputBox: {
    marginBottom: "0 !important",
    borderColor: "transparent !important",
    "& .css-rmuk7y-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "12px",
    },
    "& .css-q0aqjl-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "14px",
      top: "6px",
    },

    "& .css-pixsb5-MuiInputBase-root-MuiOutlinedInput-root": {
      borderStyle: "solid",
      borderColor: "transparent",
      borderRadius: "4px",
      color: "#181818",
      fontSize: "16px",
      height: "48px",
      width: "100%",
      outline: "none",
    },
    "& .css-1ev87vg-MuiGrid-root>.MuiGrid-item": {
      padding: "0 !important",
    },
  },
  selectLabel:{
    "& .css-q0aqjl-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize:"14px !important",
      top:"6px !important"
    },
  },
  selectBox: {
    marginTop: "3px",
    // "& .css-1in441m>span": {
    //   opacity: "1 !important",
    // },
    "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
      display: "none !important",
    },
    " & .css-bpeome-MuiSvgIcon-root-MuiSelect-icon":{
      display: "none !important",
    },
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "9.5px 14px !important",
      },
  },
}));

export default function StepperShippingForm(props) {
  const classes = useStyles();
  const [userError, setUserError] = useState("");
  const { register, setRegister, indAddress } = props;
  const storeSignIn = localStorage.getItem("storeSignIn");
  const registeData = JSON.parse(storeSignIn);

  const handleSubmit = (event) => {
    console.log(event);
  };
  const onRegister = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };

  const onEnqFocusEvent = () => {
    setUserError("");
  };
  React.useEffect(() => {
    if (userError === "") {
      return;
    } else {
      const timer = setTimeout(() => {
        setUserError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userError]);
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      text: "E-Mail address",
      value: registeData?.email ? registeData?.email : register.email,
      validators: ["required", "isEmail"],
    },
    {
      id: 2,
      name: "phone",
      type: "number",
      text: "Phone Number",
      value:
        indAddress && indAddress !== undefined
          ? indAddress[0]?.telephone
          : register.phone,
      validators: ["required"],
    },
    {
      id: 3,
      name: "fname",
      type: "text",
      text: "First Name",
      value:
        indAddress && indAddress !== undefined
          ? indAddress[0]?.firstname
          : register.fname,
      validators: ["required"],
    },
    {
      id: 4,
      name: "lname",
      type: "text",
      text: "Last Name",
      value:
        indAddress && indAddress !== undefined
          ? indAddress[0]?.lastname
          : register.lname,
      validators: ["required"],
    },
    // {
    //   id: 5,
    //   name: "address",
    //   type: "text",
    //   text: "Street Address  ",
    //   value: register.address,
    //   validators: ["required"],
    // },
    {
      id: 5,
      name: "country",
      type: "text",
      text: "Country",
      value:
        indAddress && indAddress !== undefined
          ? indAddress[0]?.country_id
          : register.country,
      validators: ["required","value:IN"],
    },
  ];
  const finalInput = [
    {
      id: 1,
      name: "postal",
      type: "text",
      text: "Postal",
      value:
        indAddress && indAddress !== undefined
          ? indAddress[0]?.postcode
          : register.postal,
      validators: ["required"],
    },
    {
      id: 2,
      name: "city",
      type: "text",
      text: "City",
      value:
        indAddress && indAddress !== undefined
          ? indAddress[0]?.city
          : register.city,
      validators: ["required"],
    },
    {
      id: 3,
      name: "province",
      type: "text",
      text: "Province",
      value:
        indAddress && indAddress !== undefined
          ? indAddress[0]?.province
          : register.province,
      validators: ["required"],
    },
  ];
  return (
    <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ margin: "auto" }}
      >
        {inputs.map((datas) => {
          return (
            <Grid item xs={6} className={classes.inputData}>
              <TextField
                type={datas.type}
                name={datas.name}
                className={classes.inputBox}
                id={datas.id}
                value={datas.value}
                onChange={onRegister}
                onFocus={onEnqFocusEvent}
                errorMessages={["this field is required"]}
                label={datas.text}
                onKeyDown={(event) => event.stopPropagation()}
                validators={datas.validators}
              />
            </Grid>
          );
        })}
        <Grid item xs={6} className={classes.inputData}>
          {indAddress && indAddress !== undefined ? (
             <FormControl className={classes.selectLabel}fullWidth>
               <InputLabel >Street Address</InputLabel>
            <Select
              sx={{ width: "100%" }}
              name="address"
              className={classes.selectBox}
              // id={datas.id}
              placeholder="Street Address"
              value={register.address}
              onChange={onRegister}
              onFocus={onEnqFocusEvent}
              label="Street Address"
              onKeyDown={(event) => event.stopPropagation()}
            >
              {indAddress[0]?.street?.map((item) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
            </FormControl>
          ) : (
            <TextField
              type="text"
              name="address"
              className={classes.inputBox}
              // id={datas.id}
              value={register.address}
              onChange={onRegister}
              onFocus={onEnqFocusEvent}
              errorMessages={["this field is required"]}
              label="Street Address  "
              onKeyDown={(event) => event.stopPropagation()}
              validators={["required"]}
            />
          )}
        </Grid>
        {finalInput.map((datas) => {
          return (
            <Grid item xs={4} className={classes.inputData}>
              <TextField
                type={datas.type}
                className={classes.inputBox}
                name={datas.name}
                id={datas.id}
                value={datas.value}
                onChange={onRegister}
                errorMessages={["this field is required"]}
                label={datas.text}
                validators={datas.validators}
                onKeyDown={(event) => event.stopPropagation()}
                onFocus={onEnqFocusEvent}
              />
            </Grid>
          );
        })}
      </Grid>
    </ValidatorForm>
  );
}
