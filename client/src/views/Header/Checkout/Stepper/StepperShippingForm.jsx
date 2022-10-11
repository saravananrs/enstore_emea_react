import {Grid,styled,} from "@mui/material";
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
      inputBox:{
        marginBottom:"0 !important",
        borderColor: 'transparent !important',
        "& .css-rmuk7y-MuiFormLabel-root-MuiInputLabel-root":{
        fontSize:"12px",
        },
        "& .css-q0aqjl-MuiFormLabel-root-MuiInputLabel-root":{
        fontSize:"14px",
        top:"6px"
    },
         
        "& .css-pixsb5-MuiInputBase-root-MuiOutlinedInput-root":{
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius:  '4px',
        color:'#181818',
        fontSize:  '16px',
        height:  '48px',
        width: '100%',
        outline: 'none',
        },
        "& .css-1ev87vg-MuiGrid-root>.MuiGrid-item":{
            padding:"0 !important"
        }
      },
}))

export default function StepperShippingForm(props) {
    const classes = useStyles()
  const [userError, setUserError] = useState("");
    const {register,setRegister} =props
    // useEffect(() => {
    //     ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
    //       if (value !== state.password) return false;
    
    //       return true;
    //     });
    //     return () => ValidatorForm.removeValidationRule("isPasswordMatch");
    //   }, [state.password]);
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
          value: register.email,
          validators:["required", "isEmail"]
        },
        {
          id: 2,
          name: "phone",
          type: "number",
          text: "Phone Number",
          value: register.phone,
          validators:["required"]
        },
        {
          id: 3,
          name: "fname",
          type: "text",
          text: "First Name",
          value: register.fname,
          validators:["required"]
        },
        {
          id: 4,
          name: "lname",
          type: "text",
          text: "Last Name",
          value: register.lname,
          validators:["required"]
        },
        {
          id: 5,
          name: "address",
          type: "text",
          text: "Street Address  ",
          value: register.address,
          validators:["required"]
        },
        {
          id: 6,
          name: "country",
          type: "text",
          text: "Country",
          value: register.country,
          validators:["required"]
        },
      ];
      const finalInput = [
        {
          id: 1,
          name: "postal",
          type: "text",
          text: "Postal",
          value: register.postal,
          validators:["required"]
        },
        {
          id: 2,
          name: "city",
          type: "text",
          text: "City",
          value: register.city,
          validators:["required"]
        },
        {
          id: 3,
          name: "province",
          type: "text",
          text: "Province",
          value: register.province,
          validators:["required"]
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
  )
}
