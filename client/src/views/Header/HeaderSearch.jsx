import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";

// MUI
import {
  Box,
  Button,
  Divider,
  Grid,
  Menu,
  TextField,
} from "@mui/material";

// Assets - Enphase
import search from "../../Assets/Header/spritemap.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllLocalData } from "../../redux/actions/EnstoreActions";

// Hooks
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";
import { useMuiStyles } from "../Contents/Styles/useMuiStyle.hook";

export default function HeaderSearch(props) {
  const { setMobileOpen, mobileOpen, setCloseVisible, closeVisible } = props;
  const classes = useMuiStyles();
  const classCheck = useStyledComponent();
  const { allLocalData } = useSelector((state) => state.store);
  const [enphaseSearch, setEnphaseSearch] = useState(null);
  const [searchResult, setSearchResult] = useState("");
  const open = Boolean(enphaseSearch);
  const navigate = useNavigate();
  const productsReturn = allLocalData?.productsToReturn?.map(
    (item) => item.items
  );
  const flattenedResult = productsReturn.flat();
  const handleClick = (event) => {
    setEnphaseSearch(event.currentTarget);
  };
  const handleClose = () => {
    setEnphaseSearch(null);
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      navigate("/viewall", {
        state: { name: searchResult, searchBox: filteredSerachResult },
      });
      if (mobileOpen && closeVisible !== undefined) {
        setMobileOpen(!mobileOpen);
        setCloseVisible(!closeVisible);
      }
      handleClose();
    }
  };
  const handleSinglePageClick = (url) => {
    navigate(`/product/${url}`);
    if (mobileOpen && closeVisible !== undefined) {
      setMobileOpen(!mobileOpen);
      setCloseVisible(!closeVisible);
    }
    handleClose();
  };
  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchResult(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLocalData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filteredSerachResult = flattenedResult.filter((item) => {
    return Object.values(item.name)
      .join("")
      .toLowerCase()
      .includes(searchResult.toLowerCase());
  });
  return (
    <Box className={classes.searchContainer}>
      <Button
        className={classes.headerSearchButton}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <svg class="fill-current svg svg-small" role="presentation">
          <use xlinkHref={`${search}?v=1.22#search`}></use>
        </svg>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={enphaseSearch}
        open={open}
        className={classes.searchDropdow}
        sx={{
          "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
            {
              marginLeft: { xs: "0px", md: "-61px" },
              padding: "16px 14px",
              marginTop: "3px",
              width: {
                xs: "50% !important",
                sm: "55% !important",
                md: "25% !important",
              },
              maxHeight: { xs: "300px", md: "500px" },
            },
        }}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box className={classes.searchInput}>
          <Grid item className={classes.storeinputData}>
            <TextField
              type="search"
              name="search"
              sx={{ width: "100%" }}
              onKeyPress={handlePress}
              placeholder="Search..."
              className={classes.searchBox}
              value={searchResult}
              onChange={onHandleChange}
              onKeyDown={(event) => event.stopPropagation()}
            />
          </Grid>
          <Box>
            {searchResult && (
              <ul style={{ marginTop: "20px" }}>
                {filteredSerachResult.map((item) => {
                  let custome_attribute = {};
                  item.custom_attributes.map((attributes) => 
                    custome_attribute[attributes.attribute_code] = attributes.value
                  );
                  return (
                    <>
                      <li
                        className={classes.headersearchList}
                        key={item}
                        onClick={() =>
                          handleSinglePageClick(custome_attribute.url_key)
                        }
                      >
                        <Box className={classCheck.cartImgContainer}>
                          <img
                            src={`https://media-store-stg.enphase.com/catalog/product${custome_attribute.thumbnail}`}
                            alt="search"
                          />
                        </Box>
                        <Box className={classCheck.bagCartListDetails}>
                          <Box className={classCheck.bagCartText}>
                            {item.name}
                          </Box>
                          <Box className={classCheck.bagCartText}>
                            ₹ {item.price.toFixed(2)}
                          </Box>
                          <Box className={classCheck.bagCartListUpdate}></Box>
                        </Box>
                      </li>
                      <Divider />
                    </>
                  );
                })}
              </ul>
            )}
          </Box>
        </Box>
      </Menu>
    </Box>
  );
}
