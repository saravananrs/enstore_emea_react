import {
  Autocomplete,
  createFilterOptions,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
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
  selectLabel: {
    "& .css-1i705n7-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "14px !important",
      top: "3px !important",
    },
  },
  stateSelect: {
    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
      height: "100px !important",
    },
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "12.5px 14px !important",
      },
    "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
      {
        height: "100px !important",
      },
  },

  selectBox: {
    marginTop: "3px",
    "& .css-q0aqjl-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "14px !important",
      top: "3px !important",
      left: "-7px !important",
    },
    "& .css-i4bv87-MuiSvgIcon-root": {
      display: "none !important",
    },
    " & .css-1q60rmi-MuiAutocomplete-endAdornment": {
      display: "none !important",
    },
    "& .css-rmuk7y-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "14px !important",
    },
    "& .css-1aetoos-MuiInputBase-root-MuiOutlinedInput-root": {
      padding: "6px 10px !important",
    },
    "& .css-wq0uzk-MuiFormControl-root-MuiTextField-root": {
      marginBottom: "0 !important",
    },
  },
}));

export default function StepperShippingForm(props) {
  const classes = useStyles();
  const filter = createFilterOptions();
  const [userError, setUserError] = useState("");
  const {
    register,
    setRegister,
    indAddress,
    setStreet,
    street,
    filteredIndReg,
  } = props;
  const handleSubmit = (event) => {
    console.log(event);
  };
  const onRegister = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };
  const onHandleStreetChange = (e, newValue) => {
    e.preventDefault();
    setRegister({ ...register, address: newValue.label });
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
      value: register.email,
      validators: ["required", "isEmail"],
    },
    {
      id: 2,
      name: "phone",
      type: "number",
      text: "Phone Number",
      value: register.phone,
      validators: ["required"],
    },
    {
      id: 3,
      name: "fname",
      type: "text",
      text: "First Name",
      value: register.fname,
      validators: ["required"],
    },
    {
      id: 4,
      name: "lname",
      type: "text",
      text: "Last Name",
      value: register.lname,
      validators: ["required"],
    },
  ];
  const finalInput = [
    {
      id: 1,
      name: "postal",
      type: "text",
      text: "Postal",
      value:
        indAddress !== undefined && street === false ? " " : register.postal,
      validators: ["required"],
    },
    {
      id: 2,
      name: "city",
      type: "text",
      text: "City",
      value: indAddress !== undefined && street === false ? " " : register.city,
      validators: ["required"],
    },
    {
      id: 3,
      name: "country",
      type: "text",
      text: "Country",
      value:
        indAddress !== undefined && street === false ? " " : register.country,
      validators: ["required"],
    },
  ];
  const streetData = [
    {
      label: indAddress && indAddress !== undefined && indAddress[0]?.street[0],
      country_id:
        indAddress && indAddress !== undefined && indAddress[0]?.country_id,
      postcode:
        indAddress && indAddress !== undefined && indAddress[0]?.postcode,
      city: indAddress && indAddress !== undefined && indAddress[0]?.city,
    },
  ];
  return (
    <ValidatorForm
      onSubmit={handleSubmit}
      onError={() => null}
      id="shiipingFormValid"
    >
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
        <Grid item xs={12} className={classes.inputData}>
          {indAddress && indAddress !== undefined ? (
            <form onSubmit={handleSubmit}>
              <Autocomplete
                className={classes.selectBox}
                value={register.address}
                onChange={(e, newValue) => {
                  onHandleStreetChange(e, newValue);
                }}
                freeSolo
                selectOnFocus
                onFocus={onEnqFocusEvent}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);
                  const { inputValue } = params;
                  const isExisting = options.some(
                    (option) => inputValue === option.label
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      inputValue,
                      label: inputValue,
                      country_id: options[0].country_id,
                      postcode: options[0].postcode,
                      city: options[0].city,
                    });
                  }

                  return filtered;
                }}
                handleHomeEndKeys
                options={streetData}
                getOptionLabel={(option) => {
                  if (typeof option === "string") {
                    return option;
                  }
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  return option.label;
                }}
                renderOption={(props, option) => (
                  <div onClick={() => setStreet(true)}>
                    <li {...props}>
                      {option.label +
                        "," +
                        option.country_id +
                        "," +
                        option.postcode +
                        "," +
                        option.city}{" "}
                    </li>
                  </div>
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Street Address" />
                )}
              />
            </form>
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
        <Grid item xs={12} className={classes.inputData}>
          <FormControl className={classes.selectLabel} fullWidth>
            <InputLabel sx={{ fontSize: "14px !important" }}>State</InputLabel>
            <Select
              sx={{ width: "100%" }}
              name="province"
              className={classes.stateSelect}
              placeholder="State"
              value={register.province}
              onChange={onRegister}
              onFocus={onEnqFocusEvent}
              label="State"
              onKeyDown={(event) => event.stopPropagation()}
            >
              {filteredIndReg.map((item) => (
                <MenuItem
                  value={item.default_name}
                  className={classes.menuSelect}
                >
                  {item.default_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
