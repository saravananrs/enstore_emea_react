import React,{ useState ,useEffect} from "react";

// MUI
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
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

// Hooks
import { useMuiStyles } from "../../../Contents/Styles/useMuiStyle.hook";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

export default function StepperShippingForm(props) {
  const classes = useMuiStyles();
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
  const onHandleStreetChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };
  const onEnqFocusEvent = () => {
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
      readOnly: false,
      value:
        indAddress !== undefined && street === false ? " " : register.postal,
      validators: ["required"],
    },
    {
      id: 2,
      name: "city",
      type: "text",
      readOnly: false,
      text: "City",
      value: indAddress !== undefined && street === false ? " " : register.city,
      validators: ["required"],
    },
    {
      id: 3,
      name: "country",
      type: "text",
      text: "Country",
      readOnly: true,
      value: register.country,
      validators: ["required"],
    },
  ];
  const streetData = [
    {
      label: indAddress !== undefined && indAddress[0]?.street[0],
      postcode: indAddress !== undefined && indAddress[0]?.postcode,
      city: indAddress !== undefined && indAddress[0]?.city,
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
            <Autocomplete
              className={classes.selectBox}
              value={register.address}
              freeSolo
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              onError={() => null}
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
                  return (register.address = option.inputValue);
                }
                return (register.address = option.label);
              }}
              renderOption={(props, option) => (
                <div onClick={() => setStreet(true)}>
                  <li {...props}>
                    {option.label +
                      "," +
                      option.postcode +
                      "," +
                      option.city}{" "}
                  </li>
                </div>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="address"
                  onChange={onHandleStreetChange}
                  label="Street Address"
                />
              )}
            />
          ) : (
            <TextField
              type="text"
              name="address"
              className={classes.inputBox}
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
                inputProps={{ readOnly: datas.readOnly }}
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
