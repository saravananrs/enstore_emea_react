import { makeStyles } from "@material-ui/styles";

export const useStyledComponent = makeStyles(() => ({
  //Header.jsx
  headerContainer: {
    display: "flex !important",
    justifyContent: "space-evenly !important",
    alignItems: "center !important",
    height: "53px !important",
    position: "fixed !important",
    top: "0 !important",
    maxWidth: "100% !important",
    zIndex: "500 !important",
    background: "#000",
  },

  //HeaderCart.jsx

  bagPage: {
    textAlign: "center",
    padding: "4rem 6rem 1rem 6rem",
    color: "#3c3c3c",
    fontFamily: "enphase-visuelt-regular,sans-serif",
    fontSize: "16px",
  },
  bagPulse: {
    color: "green",
    animation: "$pulse-animation 2s infinite",
  },
  "@keyframes pulse-animation": {
    "0%": {
      boxShadow: "0 0 0 0px rgba(0, 0, 0, 0.2)",
    },
    " 100% ": {
      boxShadow: "0 0 0 20px rgba(0, 0, 0, 0)",
    },
  },

  items: {
    padding: "12px 32px",
    cursor: "pointer",
    color: "#3c3c3c",
    fontFamily: "enphase-visuelt-regular,sans-serif",
    display: "flex",
    alignItems: "center",
  },
  priceContainer: {
    display: "flex !important",
    flexDirection: "column !important",
    padding: "24px 20px !important",
  },
  priceItems: {
    display: "flex !important",
    justifyContent: "space-between !important",
  },
  subtotal: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    textTransform: "capitalize !important",
    fontSize: "1.125rem !important",
  },
  checkoutBtn: {
    height: "44px !important",
    border: "1px solid #000 !important",
    color: "#fff !important",
    background: "#000 !important",
    padding: "12px 100px !important",
    borderRadius: "36px !important",
    fontFamily: "enphase-visuelt-medium !important",
    fontSize: "0.875rem !important",
    marginTop: "20px !important",
    textTransform: "capitalize !important",
  },
  bagIcon: {
    position: "relative",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  cartqty: {
    display: "flex",
    position: "absolute",
    bottom: "19px",
    right: "107px",
    width: "14px",
    height: "14px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "50%",
    color: "#000",
    fontSize: "8px",
    "@media (max-width: 500px)": {
      right: "10%",
      bottom: "15%",
    },
    "@media screen and (min-width: 476px) and (max-width: 650px)": {
      right: "7%",
      bottom: "26%",
    },
    "@media screen and (min-width: 651px) and (max-width: 1023px)": {
      right: "5%",
      bottom: "26%",
    },
  },
  bagCartContainer: {
    display: "flex !important",
    flexDirection: "column !important",
    overflowY: "auto !important",
  },
  bagCartList: {
    overflowY: "hidden",
    height: "124px !important",
    padding: "20px !important",
  },
  bagCartListHeight: {
    overflowY: "auto",
    height: "170px !important",
    padding: "20px !important",
  },

  // Header CartItem.jsx

  bagCartItem: {
    display: "flex !important",
    flexDirection: "row !important",
    alignItems: "center",
    marginBottom: "10px !important",
  },
  cartImgContainer: {
    width: "64px",
    height: "64px",
    marginRight: "20px",
    flex: "0 0 auto",
    overflow: " hidden",
  },
  bagCartListDetails: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "0.875rem !important",
  },
  bagCartText: {
    color: "#3c3c3c !important",
    marginBottom: "4px !important",
  },
  bagCartListUpdate: {
    display: "flex !important",
    alignItems: "center",
    fontSize: "0.875rem !important",
    marginTop: "10px !important",
  },
  bagCartListQuantiity: {
    marginRight: " 10px",
    overflow: "hidden",
  },
  inputContainer: {
    position: "relative",
    overflow: "hidden",
  },
  inputBox: {
    position: "relative",
    outline: " none",
    backgroundColor: " #fff",
    border: "1px solid #3c3c3c",
    padding: " 8px 20px 8px 7px",
    textAlign: "center",
    borderRadius: "4px",
    width: "50px",
    height: "32px",
    cursor: "pointer",
  },
  arrowContainer: {
    opacity: "1",
    position: "absolute",
    backgroundColor: " #fff",
    top: "0",
    right: "0",
    width: "calc(50% - 6px)",
    height: "100%",
    border: "1px solid #3c3c3c",
    display: "flex",
    flexDirection: "column",
    alignItems: " center",
    justifyContent: " center",
    cursor: "pointer",
    borderRadius: "0 4px 4px 0",
    padding: "5px 6px 0",
  },
  upArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer !important",
    width: "16px",
    height: "16px",
  },
  remove: {
    textDecoration: "underline",
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
  },
  update: {
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
  },
  updatePedning:{
    textDecoration: "underline",
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
  },
  divider: {
    margin: "18px 0px !important",
  },
  //HeaderDropDown.jsx
  dropDownContainer: {
    padding: "0px 10px",
    borderRadius: "50px",
    transition: "background .2s ease-out",
    minWidth: "unset",
    backgroundColor: "#F37321",
    height: "31px",
  },
  dropDownButton: {
    color: "black",
    padding: "0",
    height: "31px",
    textTransform: "capitalize !important",
    fontSize: "0.8rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  dropDownArrow: {
    fontSize: "1.2rem !important",
    marginTop: "-3px",
  },

  //HeaderMobileView.jsx
  rightSide: {
    justifyContent: "end !important",
    alignItems: "center !important",
    "@media screen and (min-width: 300px) and (max-width: 324px)": {
      marginLeft: "0 !important",
    },
    "@media screen and (min-width: 325px) and (max-width: 475px)": {
      marginLeft: "80px !important",
    },
    "@media screen and (min-width: 476px) and (max-width: 650px)": {
      marginLeft: "185px !important",
    },
    "@media screen and (min-width: 651px) and (max-width: 1023px)": {
      marginLeft: "390px !important",
    },
  },
  mobileContainer: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "center",
  },
  headerMobLogo: {
    height: "20px",
    width: "110px",
  },
  imgContain: {
    width: "95px",
    marginLeft: "19px",
  },
  //HeroSection.jsx
  storageContainer: {
    paddingTop: "90px",
    "@media (max-width: 780px)": {
      paddingTop: "55px",
    },
  },
  storageHeader: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "70%",
    paddingBottom: "4%",
    fontFamily: "enphase-visuelt-regular,sans-serif",
  },
  headTitle: {
    marginBottom: "15px !important",
    fontSize: "48px !important",
    "@media (max-width: 780px)": {
      fontSize: "32px !important",
    },
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  productContainer: {
    paddingBottom: "2%",
    overflowY: "hidden",
    marginBottom: "1%",
    float:"none",
    margin:"0 auto",
    width:"100%",
    maxWidth:"70%",
    "@media (max-width: 780px)": {
      maxWidth:"95%",
      overflowX:"auto",
    },
  },
  productList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "@media (max-width: 780px)": {
      justifyContent: "space-around !important",
    },
    // justifyContent: "space-between",
    // margin:"0px 0 60px 0"
  },
  pImages: {
    position: "relative",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  pName: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "14.9px !important",
    marginTop: "6px ",
    textAlign: "center !important",
    lineHeight: "2em !important",
    "@media (max-width: 780px)": {
      fontSize: "0.875rem !important",
    },
    color: "#6e6e73",
  },
  positions: {
    objectPosition: "center",
    height: "100px",
    width: "90px",
    "@media (max-width: 780px)": {
      height: "80px",
      width: "80px",
    },
  },
  listItems: {
    marginLeft: "35px !important",
  },
  //HeroSectionImg.jsx
  homeContainer: {
    float: "none",
    margin: "0 auto",
    maxWidth: "85%",
    position: "relative",
    "@media (max-width: 780px)": {
      maxWidth: "90%",
    },
    "&:hover": {
      boxShadow: "0px 20px 36px -8px rgb(0 0 0 / 10%)",
    },
  },
  homeImg: {
    width: "100%",
    borderRadius: "16px",
    "@media (max-width: 780px)": {
      objectPosition: "center center",
      maxHeight: " 100vh",
      objectFit: "cover",
      height: "380px",
      letterSpacing: "0 !important",
    },
  },
  homeContent: {
    position: "absolute",
    zIndex: "10",
    top: "8%",
    left: "2%",
  },
  homeText: {
    fontSize: "0.6875rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    lineHeight: "0.875rem !important",
  },
  homeHeadings: {
    fontSize: "2.625rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    margin: "16px 0px 8px 0px !important",
    lineHeight: "3.3rem !important",
    marginBottom: "30px !important",
    "@media (max-width: 780px)": {
      fontSize: "1.625rem !important",
      lineHeight: "1.3em !important",
      fontWeightL: "normal !important",
    },
  },
  homeButton: {
    border: "1px solid #3c3c3c !important",
    color: "#3c3c3c !important",
    background: "transparent !important",
    padding: "12px 32px !important",
    borderRadius: "36px !important",
    textTransform: "capitalize !important",
    fontSize: "0.875rem !important",
    fontFamily: "enphase-visuelt-medium !important",
    "&:hover": {
      border: "1px solid #3c3c3c !important",
      color: "#fff !important",
      background: "#3c3c3c  !important",
    },
    "@media (max-width: 780px)": {
      padding: "8px 16px !important",
      backgroundColor: " #3c3c3c !important",
      border: "1px solid #3c3c3c !important",
      color: "#fff !important",
      fontSize: "0.7rem !important",
    },
  },

  //cardGrid.jsx

  cardGridContainer: {
    paddingTop: "20px",
    display: "flex !important",
    "@media (max-width: 780px)": {
      padding: "50px 0px",
    },
  },
  cardContainer: {
    display: "flex !important",
    flexDirection: "row !important",
    flexWrap: "wrap",
   // float:"none",
    justifyContent: "center !important",
    // margin:"0 auto",
    // width:"100%",
    // maxWidth:"78%",
    "@media (max-width: 780px)": {
      maxWidth:"100% !important",
    },
    // "@media screen and (min-width: 1650px) and (max-width: 2200px)": {
    //   maxWidth:"65% !important",
    // }
  },
  cardgridWidth:{
     float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "80%",
  },
  cardGridHeader: {
    // float: "none",
    // width: "100%",
    // margin: "0 auto",
    // maxWidth: "76%",
    paddingBottom: "5%",
    marginLeft:"4%",
    fontFamily: "enphase-visuelt-regular,sans-serif",
  },
  cardGridTitle: {
    marginBottom: "15px !important",
    fontSize: "2.2rem !important",
    "@media (max-width: 780px)": {
      fontSize: "1.625rem !important",
    },
  },
  headBody: {
    fontSize: "1.25rem !important",
    marginRight: "16% !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },

  //cardModel.jsx

  cardimg: {
    width: "20%",
  },

  card: {
    maxWidth: 330,
    display:"flex",
    flexDirection:"column",
    alignItems:'center',
    width: "330px",
    textAlign: "center !important",
    padding: "10px 20px",
    marginBottom:"20px !important",
    height: "540px",
    "@media (max-width: 780px)": {
      height: "500px",
    },
    "@media screen and (min-width: 1650px) and (max-width: 2200px)": {
      maxWidth: "405px !important",
      width: "405px !important",
      height: "608px !important",
    },
    position: "relative !important",
    marginLeft: "20px",
    borderRadius: "16px !important",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "none !important",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3) !important",
    }
  },
  viewallbtn: {
    fontSize: "1.5rem !important",
    lineHeight: "1.3em !important",
    fontWeight: "normal !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  cardViewAll: {
    maxWidth: 330,
    width: "330px",
    textAlign: "center !important",
    padding: "10px 20px",
    height: "540px",
    "@media (max-width: 780px)": {
      height: "500px",
    },
    "@media screen and (min-width: 1650px) and (max-width: 2200px)": {
      maxWidth: "405px !important",
      width: "405px !important",
      height: "608px !important",
    },
    position: "relative !important",
    marginLeft: "20px",
    borderRadius: "16px !important",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "none !important",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3) !important",
    },
  },
  content: {
    textAlign: "center",
  },
  procode: {
    fontFamily: " T-Star Pro",
    fontSize: " 0.7rem !important",
    lineHeight: "1em",
    letterSpacing: "0.05em",
  },
  title: {
    textAlign: "center",
    fontSize: " 1rem !important",
    lineHeight: "1.3em",
    cursor: "default !important",
    "@media (max-width: 780px)": {
      fontSize: "1rem !important",
    },
    fontFamily: "enphase-visuelt-medium !important",
  },
  price: {
    fontFamily: "enphase-visuelt-medium !important",
    fontSize: "1rem ",
    padding: "20px 0px !important",
  },
  learnbtn: {
    border: " 1px solid #000 !important",
    backgroundColor: "#000  !important",
    color: " #fff  !important",
    textTransform: "capitalize !important",
    fontFamily: "enphase-visuelt-medium !important",
    borderRadius: "25px !important",
    padding: "0px 13px 0 13px !important",
    fontSize:"12px !important",
    height: "36px",
    "@media screen and (min-width: 300px) and (max-width: 376px)": {
      fontSize: "12px !important",
      padding: "4px 15px 0 15px !important",
      height: "30px",
    },
    "@media screen and (min-width: 880px) and (max-width: 996px)": {
      fontSize: "12px !important",
      padding: "4px 16px 0 12px !important",
    },
  },
  addbtn: {
    border: "1px solid #3c3c3c  !important",
    color: "#3c3c3c  !important",
    padding: "0px 13px 0 13px !important",
    fontSize:"12px !important",
    marginLeft: "10px !important",
    backgroundColor: "transparent  !important",
    borderRadius: "25px !important",
    height: "36px",
    textTransform: "capitalize !important",
    fontFamily: "enphase-visuelt-medium !important",
    "@media screen and (min-width: 300px) and (max-width: 376px)": {
      fontSize: "12px !important",
      padding: "4px 15px 0 15px !important",
      height: "30px",
    },
    "@media screen and (min-width: 880px) and (max-width: 996px)": {
      fontSize: "12px !important",
      padding: "4px 16px 0 12px !important",
    },
  },
  buttonContainer: {
    fontSize: "0.875rem  !important",
    justifyContent: "center",
    position: "relative !important",
  },
  cardFooter: {
    position: "absolute",
    bottom: "7%",
  },

  //lifeStyle.jsx
  lifeStyleContainer: {
    padding: "70px 0px",
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "78%",
    "@media (max-width: 780px)": {
      padding: "10px 0px 50px 0px",
    },
  },
  lifeStyleHeader: {
    // float: "none",
    // width: "100%",
    // margin: "0 auto",
    // maxWidth: "90%",
    paddingBottom: "2%",
    fontFamily: "enphase-visuelt-regular,sans-serif",
    "&:active": {
      transform: "translateY(1.5rem)",
      opacity: "1",
    },
  },
  lifeStyleTitle: {
    marginBottom: "15px !important",
    fontSize: "2.2rem !important",
    "@media (max-width: 780px)": {
      fontSize: "1.625rem !important",
    },
    opacity: 0,
    transform: "translateY(10vh)",
    visibility: "hidden",
    transition:
      "opacity 1200ms ease-out, transform 600ms ease-out,visibility 1200ms ease-out",
  },
  lifeVisible: {
    opacity: "1",
    transform: "none",
    visibility: "visible",
  },

  lifestyleHeadings: {
    display:"flex !important",
    justifyContent:"center !important"
  },
  lifeText: {
    position: "absolute",
    zIndex: "1",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "2.625rem !important",
    marginTop: "60px !important",
    "@media (max-width: 780px)": {
      margin: "24px !important",
      fontSize: "1.25rem !important",
    },
  },
  //lifeStyleParts.jsx
  helpContaier: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "65%",
    justifyContent: "space-between",
    padding: "24px 0px",
  },
  helpGrid: {
    marginBottom: "20px",
    "@media (max-width: 780px)": {
      flexDirection: "column !important",
    },
  },
  helpGridPart: {
    "@media (max-width: 780px)": {
      justifyContent: "flex-start",
      marginBottom: "10px",
    },
  },
  helpGridSection: {
    marginRight: "20px",
    color: "#3c3c3c",
    fontSize: "12px",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    "@media (max-width: 780px)": {
      marginBottom: "10px",
    },
  },
  helpGridcontent: {
    marginRight: "20px",
    color: "#3c3c3c",
    fontSize: "13px",
    fontFamily: "enphase-visuelt-regular,sans-serif",
    "@media (max-width: 780px)": {
      marginBottom: "13px",
    },
  },
  lifeStylePartspayment: {
    display: "flex",
  },
  payImg: {
    height: "32px",
    marginRight: "20px",
  },
  lifestyleFooterContainer: {
    backgroundColor: "#61C06A",
    padding: "20px 0px",
    "@media (max-width: 780px)": {
      borderRadius: "16px",
      textAlign: "center",
      padding: "0",
    },
  },
  lifestyleFooter: {
    float: "none",
    margin: "0 auto",
    maxWidth: "78%",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 780px)": {
      flexDirection: "column !important",
      padding: "30px",
    },
  },
  lifeStylebtncontainer: {
    padding: "0px 20px",
    borderRadius: "50px",
    transition: "background .2s ease-out",
    minWidth: "unset",
    backgroundColor: "#ffffff",
    height: "44px",
  },
  lifeStylebtn: {
    color: "black",
    padding: "0",
    height: "44px",
    fontFamily: "enphase-visuelt-medium,sans-serif !important",
    textTransform: "capitalize !important",
    fontSize: "0.875rem !important",
    cursor: "pointer",
    fontWeight: "550 !important",
  },
  lifeStylequestions: {
    fontFamily: "enphase-visuelt-regular,sans-serif",
    fontSize: "1.5rem !important",
    "@media (max-width: 780px)": {
      fontSize: "1.125rem !important",
      marginBottom: "40px !important",
    },
  },
  //learnMore.jsx

  learMoreContainer: {
    display: "flex",
    justifyContent: "space-between",
    float: "none",
    maxWidth: "64%",
    "@media (max-width:500px)": {
      maxWidth: "88%",
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)": {
      maxWidth: "88%",
    },
    margin: "0 auto",
    alignItems: "center",
  },
  lSideText: {
    color: "#6e6e73 !important",
    fontSize: "0.875rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  lHeading: {
    fontSize: "1.25rem !important",
    fontFamily: "enphase-visuelt-medium !important",
    "@media (max-width:500px)": {
      fontSize: "0.875rem !important",
      fontFamily: "enphase-visuelt-regular,sans-serif !important",
    },
  },
  learnMoreDivider: {
    margin: "0.7em 15em !important",
    "@media (max-width:500px)": {
      margin: "10px 10px !important",
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)": {
      margin: "10px 40px !important",
    },
  },
  storeAcc: {
    fontSize: "12px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },

  //singleProduct.jsx
  singleProductContainer: {
    textAlign: "center",
    float: "none",
    maxWidth: "78%",
    margin: "0 auto !important",
    padding: "20px 0px",
    "@media (max-width: 500px)": {
      display: "block !important",
    },
  },
  singleProductcolumn: {
    "@media (max-width: 500px)": {
      maxWidth: "100% !important",
    },
  },
  singleProductimgSec: {
    boxShadow: "none !important",
    borderRadius: "16px !important",
    marginBottom: "15px !important",
  },
  singleProductimgSecChild: {
    cursor: "pointer",
  },
  singleProductrightAllign: {
    paddingLeft: "100px !important",
    "@media (max-width: 500px)": {
      maxWidth: "100% !important",
      padding: "10px !important",
    },
  },

  //singleProductContent.jsx
  spcontentContainer: {
    textAlign: "left",
  },
  spheader: {
    fontSize: "2.625rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    paddingBottom: "15px",
    "@media (max-width: 800px)": {
      fontSize: "1.625rem !important",
    },
  },
  spprice: {
    fontSize: "1.5rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    paddingBottom: "15px",
    "@media (max-width: 800px)": {
      fontSize: "1.25rem !important",
    },
  },
  pCode: {
    fontSize: "1.25rem !important",
    fontFamily: "T-Star Pro !important",
    marginLeft: "16px",
    color: "#6e6e73",
  },
  pText: {
    fontSize: "1.25rem !important",
    lineHeight: "1.9rem !important",
    marginBottom: "25px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    "@media (max-width: 800px)": {
      fontSize: "1rem !important",
    },
  },
  pTextRead: {
    fontSize: "1.25rem !important",
    lineHeight: "1.9rem !important",
    marginBottom: "25px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    textDecoration: "underline",
    cursor: "pointer",
  },
  spqnty: {
    fontSize: "1rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    marginBottom: "18px !important",
  },
  spinputContainer: {
    position: "relative",
  },
  spinputBox: {
    position: "relative",
    outline: " none",
    width: "95px",
    backgroundColor: " #fff",
    border: " 1px solid #3c3c3c",
    borderRadius: " 8px",
    padding: "8px 48px 8px 7px",
    height: "56px",
    textAlign: " center",
    cursor: "pointer",
  },
  sparrowContainer: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "#fff",
    top: 0,
    right: "68%",
    width: "calc(17% - 6px)",
    height: "100%",
    border: " 1px solid #3c3c3c",
    borderRadius: "0 8px 8px 0",
    display: "flex",
    flexDirection: "column",
    padding: "0 6px 0",
    alignItems: "center",
    justifyContent: "center",
    cursor: " pointer",
    "@media screen and (min-width: 1650px) and (max-width: 2200px)": {
      right: "82%",
      width: "calc(10% - 6px)",
    },
    "@media (max-width: 500px)": {
      right: "59%",
      width: "calc(22% - 6px)",
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)": {
      right: "52%",
      width: "calc(26% - 6px)",
    },
  },
  spupArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer !important",
    width: "16px",
    height: "16px",
  },
  spcartBtn: {
    width: "95% !important",
    border: "1px solid #000 !important",
    backgroundColor: "#000 !important",
    color: "#fff !important",
    fontSize: "1rem !important !important",
    fontFamily: "enphase-visuelt-medium !important",
    borderRadius: "56px !important",
    padding: "26px 32px !important",
    margin: "30px 0px !important",
    "@media (max-width: 800px)": {
      fontSize: "0.875rem !important",
      textTransform: "capitalize !important",
    },
  },

  //StoreSignIn.jsx
  storeSignInContainer: {
    padding: "40px 0px",
  },
  signInRegister: {
    width: "400px !important",
    margin: "0 auto",
  },
  storeLogin: {
    backgroundColor: "#fff",
    width: "100%",
    background: "#faf6ef",
    padding: "40px",
    borderRadius: "16px",
  },
  blockTitle: {
    marginBottom: "0",
    paddingBottom: "8px",
  },
  blockTitleVariant: {
    fontFamily: "enphase-visuelt-medium,sans-serif !important",
    fontWeight: "normal !important",
    fontSize: "1.8rem !important",
  },
  storeSignInContent: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  storeSignInBtn: {
    border: "1px solid #000 !important",
    backgroundColor: "#000 !important",
    color: "#fff !important",
    fontSize: "1rem !important",
    fontFamily: "enphase-visuelt-medium !important",
    borderRadius: "56px !important",
    textTransform: "capitalize !important",
    width: "100% !important",
  },
  storeSignUpBtn: {
    "&:before": {
      content: '"Not a Member Yet?" !important',
      paddingRight: "10px !important",
    },
    marginTop: "25px !important",
    fontSize: "12px !important !important",
    fontFamily: "enphase-visuelt-regular,sans-serif  !important",
    textTransform: "none !important",
  },
  frgtPassword: {
    fontSize: "12px",
    marginTop: "16px",
    fontFamily: "enphase-visuelt-regular,sans-serif  !important",
  },

  //StoreSignInForm.jsx

  fieldNote: {
    borderBottom: " 1px solid #7d7d7d",
    marginBottom: "0",
    paddingBottom: "24px",
    fontSize: "13px !important",
  },
  storeInputContainer: {
    marginTop: "40px",
  },
  storelabel: {
    margin: " 0 0 8px !important",
    display: " inline-block !important",
    fontFamily: "T-Star Pro !important",
    fontSize: "0.75rem !important",
    fontWeight: "600 !important",
    color: "#000 !important",
    lineHeight: "1em !important",
    letterSpacing: "0.05em !important",
    textTransform: "uppercase !important",
    "&:after": {
      content: '"*" !important',
      color: "#e02b27 !important",
      fontSize: "1.2rem !important",
      margin: "0 0 0 5px !important",
    },
  },
  storeinputData: {
    width: "100%",
  },

  signInBox: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "8px 9px !important",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: "#0a0802",
    },
    background: "#faf6ef !important",
    borderRadius: "8px !important",
    // border: "1px solid #7d7d7d !important",
    width: "100% !important",
  },
  remeberMe: {
    display: "flex !important",
    margin: "0 0 20px",
    position: "relative !important",
  },
  checkBox: {
    padding: "0 !important",
    "&.css-1ombvec-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
      color: "#0075FF !important",
    },
  },
  rememberLabel: {
    position: "absolute !important",
    fontFamily: "T-Star Pro !important",
    fontSize: " 0.75rem !important",
    lineHeight: "1em !important",
    color: "#000 !important",
    letterSpacing: " 0.05em !important",
    left: "9%",
    top: "30%",
  },
  whatsThis: {
    fontSize: "12px",
    cursor: "help",
  },
}));
