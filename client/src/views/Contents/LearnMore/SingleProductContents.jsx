import React from "react";
import { Box, Typography, Button } from "@mui/material";
import upArrow from "../../../Assets/Header/spritemap.svg";
import { useState } from "react";
import { addToCart } from "./../../../redux/actions/EnstoreActions";
import { useDispatch } from "react-redux";
import { useStyledComponent } from "../Styles/useStyles.hook";
export default function SingleProductContents(props) {
  const product = props.productData;
  const classes = useStyledComponent()
  const [count, setCount] = useState(1);
  const [readMore, setReadMore] = useState(true);
  const dispatch = useDispatch();
  let custome_attribute = {};
  product.custom_attributes.map((attributes) => {
    custome_attribute[attributes.attribute_code] = attributes.value;
  });

  function getText(html) {
    let divContainer = document.createElement("div");
    divContainer.innerHTML = html;
    return divContainer.textContent || divContainer.innerText || "";
  }

  let descriptionData = custome_attribute.short_description;

  const handleReadClick = () => {
    setReadMore(!readMore);
  };
  const handleIncrement = (number) => {
    setCount(number + 1);
  };
  const handleDecrement = (number) => {
    if (number > 1) {
      setCount(number - 1);
    }
  };
  const handleCartbtnclk = (count) => {
    dispatch(addToCart(product, count));
  };
  return (
    <div>
      <Box className={classes.spcontentContainer}>
        <Typography variant="h4" className={classes.spheader}>
          {product.name}
        </Typography>
        <Typography variant="body2" className={classes.spprice}>
          {product.price} ₹{" "}
          <span className={classes.pCode}>SKU: {product.sku}</span>
        </Typography>
        <Box>
          <Typography variant="h4" className={classes.pText}>
            {getText(descriptionData)}
          </Typography>
          {/* {readMore ? (
            <Typography
              variant="body2"
              className={classes.pTextRead}
              onClick={handleReadClick}
            >
              Read More
            </Typography>
          ) : (
            <>
              <Typography variant="body2" className={classes.pText}>
                Using the IQ Load Controller helps power your critical loads for
                a longer time when off-grid by shedding non-essential loads, or
                can help ensure the right solar-to-storage ratio for an off-grid
                system.
              </Typography>
              <Typography variant="body2" className={classes.pText}>
                This product can be used to control 2x36A dedicated loads or
                2x32A branch or solar circuits.
              </Typography>
              <Typography variant="body2" className={classes.pText}>
                The DIN rail design enables easy installation and servicing.
              </Typography>
              <Typography variant="body2" className={classes.pText}>
                The product comes with a 5-year warranty.
              </Typography>
            </>
          )} */}
        </Box>
        <Box>
          <Typography variant="body1" className={classes.spqnty}>
            Quantity
          </Typography>
          <Box className={classes.spinputContainer}>
            <input
              className={classes.spinputBox}
              type="text"
              pattern="[0-9]*"
              readOnly
              value={count}
            />
            <Box className={classes.sparrowContainer}>
              <Box
                onClick={() => handleIncrement(count)}
                className={classes.spupArrow}
                sx={{ transform: "rotate(180deg)" }}
              >
                <svg class="fill-current svg svg-xxsmall" role="presentation">
                  <use xlinkHref={`${upArrow}?v=1.20#chevron_down`}></use>
                </svg>
              </Box>
              <Box
                className={classes.spupArrow}
                onClick={() => handleDecrement(count)}
              >
                <svg class="fill-current svg svg-xxsmall" role="presentation">
                  <use xlinkHref={`${upArrow}?v=1.20#chevron_down`}></use>
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            className={classes.spcartBtn}
            onClick={() => handleCartbtnclk(count)}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </div>
  );
}
