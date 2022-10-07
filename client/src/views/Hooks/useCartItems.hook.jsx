import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useCartItems() {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.store);
  const [openDialog, setOpenDialog] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [cartdDown, setCartdDown] = useState(null);
  const [bagCount, setBagCount] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [quantitySetter, setQuantitySetter] = useState(true);
  const [con, setCon] = useState(false);
  const [count, setCount] = useState(1);
 
  const open = Boolean(cartdDown);
  const handleClose = () => {
    setCartdDown(null);
  };
  return {
    open,
    openDialog,
    setOpenDialog,
    toggle,
    setToggle,
    cartdDown,
    setCartdDown,
    bagCount,
    setBagCount,
    subTotal,
    setSubTotal,
    quantitySetter,
    setQuantitySetter,
    con,
    setCon,
    count,
    setCount,
    handleClose,
  };
}
