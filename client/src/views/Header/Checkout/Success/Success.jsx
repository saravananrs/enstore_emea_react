import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// MUI
import { Container } from "@mui/system";
import { Box, Button } from "@mui/material";

// Hooks
import { useMuiStyles } from "../../../Contents/Styles/useMuiStyle.hook";

export default function Success() {
  const classes = useMuiStyles();
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state.order;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className={classes.successContaier}>
      <Box className={classes.sucessBox}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className={classes.tick}
        >
          <path
            fillRule="nonzero"
            d="M7.59 0l1.195 1.72 1.72-1.104.465 2.06 2.005-.34-.325 2.103 1.964.488-1.053 1.805L15.2 7.985l-1.64 1.253 1.053 1.806-1.964.488.325 2.102-2.005-.34-.465 2.06-1.72-1.104-1.194 1.7-1.194-1.72-1.721 1.103-.466-2.038-2.003.34.323-2.103-1.963-.488 1.052-1.806L0 7.985l1.64-1.253L.566 4.927 2.53 4.44l-.323-2.102 2.003.339.466-2.06 1.72 1.104L7.591 0zm1.768 6.12L6.687 9.007a.045.045 0 0 1-.067 0L5.64 7.955a.358.358 0 0 0-.53 0 .417.417 0 0 0 0 .564l1.283 1.37c.07.075.165.112.265.112h.002c.1 0 .195-.039.265-.115l2.97-3.208a.417.417 0 0 0-.007-.563.358.358 0 0 0-.529.006z"
          ></path>
        </svg>
        <Box className={classes.content}>
          Your order number is: {order.increment_id}.
        </Box>
        <Box className={classes.content}>
          You will shortly receive an order confirmation email.
        </Box>
        <Box>
          <Button variant="contained" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
