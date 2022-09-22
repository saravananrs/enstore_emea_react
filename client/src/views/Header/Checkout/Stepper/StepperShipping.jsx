import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import useStepper from "./useStepper.hook";
import axios from "axios";
const useStyles = makeStyles(() => ({
  shippingContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
  },
  inputData: {
    position: " relative",
    cursor: "text",
    paddingLeft:"8px !important"
  },
  nextstep:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  continuebtn:{
    margin: 'calc(3 * 8px) 0 calc(2 * 8px) !important',
    alignItems: 'center !important',
    background: '#F37321 !important',
    borderRadius: '4px !important',
    padding: '1px 16px !important',
    cursor: 'pointer !important',
    color: '#fff !important',
    display:"flex !important",
    fontSize: '16px !important',
    height: '48px !important',
    justifyContent: 'center !important',
    position: 'relative !important',
    width: '100% !important',
  },
  exitbtn:{
    letterSpacing: '.2px !important',
    fontSize: '11px !important',
    display:"flex !important",
    textAlign: 'center !important',
    justifyContent: 'center !important',
    color: '#707070 !important',
    padding: '5px 0 10px !important',
    outline: 'none !important',
  },
}));

export default function StepperShipping(props) {
    const {activeStep,setActiveStep, setShippingMethod} = props
  const IntialShippingRegister = {
    email: "",
    phone: "",
    fname: "",
    lname: "",
    country: "",
    address: "",
    optional:"",
    postal:"",
    city:"",
    province:"",
  };
  const classes = useStyles();
  const [register, setRegister] = useState(IntialShippingRegister);
  console.log(register,"register");
  const [userError, setUserError] = useState("");
  const {allStepsCompleted,isLastStep,completed,steps} = useStepper()
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      text: "Email address",
      value: register.email,
    },
    {
      id: 2,
      name: "phone",
      type: "number",
      text: "Phone Number",
      value: register.phone,
    },
    {
      id: 3,
      name: "fname",
      type: "text",
      text: "First Name",
      value: register.fname,
    },
    {
      id: 4,
      name: "lname",
      type: "text",
      text: "Last Name",
      value: register.lname,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      text: "Address",
      value: register.address,
    },
    {
      id: 6,
      name: "country",
      type: "text",
      text: "Country",
      value: register.country,
    },
  ];
  const finalInput = [
    {
        id: 1,
        name: "postal",
        type: "text",
        text: "Postal",
        value: register.postal,
      },
      {
        id: 2,
        name: "city",
        type: "text",
        text: "City",
        value: register.city,
      },
      {
        id: 3,
        name: "province",
        type: "text",
        text: "Province",
        value: register.province,
      },
  ]
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

  const handleShipmentClick = async() =>{
    const quoteId = localStorage.getItem("tokenKey");
    const reqBody ={
      "address": {
        "region": "Greifswald",
        "country_id": "DE",
        "street": [
          "123 Oak Ave"
        ],
        "postcode": "17461",
        "city": "Greifswald",
        "firstname": "Saravanan",
        "lastname": "Vaithiyanathan",
        "customer_id": null,
        "email": "saravanan@riverstonetech.com",
        "telephone": "4422531111",
        "same_as_billing": 1
      },
        data: quoteId,
      }
    await axios.post("http://localhost:8000/api/estimateShipping",reqBody)
    .then((response) => {
      console.log("response", response.data);
      setShippingMethod(response.data)
    })
    .catch((error) => {
      console.log(error);
    });

    const newActiveStep =  
    isLastStep() && !allStepsCompleted()
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
  await  setActiveStep(newActiveStep);
  }
  return (
    <Box className={classes.shippingContainer}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ margin: "auto" }}
      >
        {inputs.map((datas) => {
          return (
            <Grid item xs={6} className={classes.inputData}>
              <input
                type={datas.type}
                id={datas.id}
                name={datas.name}
                aria-label={datas.text}
                value={datas.value}
               // placeholder={datas.text}
                className="inputBox"
                onChange={onRegister}
                onFocus={onEnqFocusEvent}
              />
              <label className="floatlabel">{datas.text}</label>
            </Grid>
          );
        })}
        <Grid item xs={12} className={classes.inputData}>
        <input
                type='text'
                name='optional'
                aria-label='Apartment,building,floor'
                value={register.optional}
              //  placeholder='Apartment,building,floor'
                className="inputBox"
                onChange={onRegister}
                onFocus={onEnqFocusEvent}
              />
              <label className="floatlabel">Apartment,building,floor</label>
        </Grid>
        {finalInput.map((datas) => {
          return (
            <Grid item xs={4} className={classes.inputData}>
              <input
                type={datas.type}
                id={datas.id}
                name={datas.name}
                aria-label={datas.text}
                value={datas.value}
               // placeholder={datas.text}
                className="inputBox"
                onChange={onRegister}
                onFocus={onEnqFocusEvent}
              />
              <label className="floatlabel">{datas.text}</label>
            </Grid>
          );
        })}
      </Grid>
      <Box className={classes.nextstep}>
        <Button className={classes.continuebtn}  onClick={handleShipmentClick} sx={{ mr: 1 }}>
        Continue
        </Button>
      </Box>
      <Box >
        <Button className={classes.exitbtn}>Exit Checkout</Button>
      </Box>
    </Box>
  );
}
