import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../../../Contents/stripe/CheckoutForm';
export default function StepperPayment(props) {
  const { register, overAll,setOpen,handleClose} = props
  const stripePromise = loadStripe('pk_test_6BLf1Fr5B4QZi5O0qo91H6u9');

  return (
    <Elements stripe={stripePromise}>
            <CheckoutForm  register={register} overAll={overAll} handleClose={handleClose}/>
        </Elements>
  )
}
