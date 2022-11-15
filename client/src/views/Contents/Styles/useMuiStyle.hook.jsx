import { makeStyles } from "@material-ui/styles";

export const useMuiStyles = makeStyles(() => ({
  //cartPage.jsx
  cartPageContainer: {
    padding: "40px 35px !important",
    "@media (max-width: 500px)": {
      padding: "29px 14px !important",
    },
  },
  cpContinue: {
    marginLeft: "30px !important",
  },
  cartPageTitle: {
    marginTop: "40px",
  },
  cartPageTitleText: {
    fontFamily: "enphase-visuelt-medium,sans-serif !important",
    fontWeight: "normal !important",
    color: "#707070 !important",
    marginBottom: "30px !important",
    marginLeft: "30px !important",
    fontSize: "24px !important",
    letterSpacing: "0.5px !important",
  },
  cartPageGrid: {
    marginTop: "10px !important",
  },
  cartPageDiscounContainer: {
    marginTop: "40px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "30%",
    "@media (max-width: 500px)": {
      width: "60%",
    },
  },
  cartPagesignInBox: {
    "& ::-webkit-input-placeholder": {
      color: "#black !important",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "8px 9px !important",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: "#0a0802",
    },
    background: "#faf6ef !important",
    "& .css-pixsb5-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: "8px !important",
    },
    width: "100% !important",
  },
  cartPageApplyBtn: {
    border: "1px solid #3c3c3c !important",
    color: "#3c3c3c !important",
    padding: "0 33px !important",
    borderRadius: " 25px !important",
    width: "40% !important",
    marginTop: "5px !important",
  },
  couponMsg: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "15px !important",
    // color: "#de1124",
    marginTop: "10px",
  },
  cartTableWrapper: {
    marginBottom: "20px",
  },
  cartPageclearItem: {
    textAlign: "right",
    "@media (max-width: 500px)": {
        textAlign: "center !important",
      },
  },
  cartPageclear: {
    height: "44px !important",
    border: "1px solid #000 !important",
    color: "#fff !important",
    background: "#000 !important",
    padding: "12px 40px !important",
    borderRadius: "36px !important",
    fontFamily: "enphase-visuelt-medium !important",
    fontSize: "0.875rem !important",
    marginTop: "20px !important",
    textTransform: "capitalize !important",
    marginLeft: "16px !important",
  },
  cpCheckoutBtn: {
    margin: " 6px 0px !important",
    cursor: "pointer !important",
    height: " 48px !important",
    backgroundColor: "#F37321 !important",
    borderRadius: " 4px !important",
    color: "#fff !important",
    width: " 100% !important",
    textTransform: "capitalize !important",
    marginTop: "30px !important",
    fontSize: "18px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },

  //cartPageSummay.jsx
  cartPageSummaryContainer: {
    padding: "24px",
    background: "#f5f5f5 !important",
  },
  cpSummary: {
    fontWeight: "600",
    fontSize: "2.4rem",
    fontFamily: "enphase-visuelt-medium,sans-serif",
    margin: "12px 0px !important",
  },
  cpSub: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px !important",
  },
  cpSubTotl: {
    color: "#3C3C30 !important",
    fontWeight: "400",
    fontSize: "16px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  cpPrice: {
    color: "#707070 !important",
    fontSize: "18px !important",
    fontWeight: "200 !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  cptext: {
    color: "#707070 !important",
    fontSize: "16px !important",
    fontWeight: "200 !important",
    fontFamily: "enphase-visuelt-Lighter,sans-serif",
    lineHeight: "25px !important",
    marginTop: "20px !important",
  },
  //cartPageTable.jsx
  cartPageTable: {
    display: "flex !important",
    justifyContent: "space-evenly",
    alignItems: "center !important",
    margin: "30px 0px",
  },
  cartPageDivider: {
    borderBottom: "1px solid #7D7D7D !important",
    margin: "0 56px !important",
  },
  cartPageImg: {
    width: "100px !important",
    margin: "auto",
    maxWidth: " 100%",
    "@media (max-width: 500px)": {
      width: "61px !important",
    },
  },
  cartProductName: {
    marginTop: "20px",
    color: "#3c3c3c !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontWeight: "normal !important",
    fontSize: "24px !important",
    display: "block",
    margin: "-3px 0 5px",
    "@media (max-width: 500px)": {
      margin: "0 !important",
      fontSize: "19px !important",
      marginTop: "0px !important",
    },
  },
  cartProductPrice: {
    fontSize: "20px !important",
    color: "#0a0802 !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontWeight: "normal !important",
    "@media (max-width: 500px)": {
      fontSize: "14px !important",
    },
  },
  cartPageinputContainer: {
    position: "relative",
    overflow: "hidden",
  },
  updateAlign:{
    position:"absolute",
    top: "178%",
    right: "65%",
  },
  cartPageinputBox: {
    position: "relative",
    outline: " none",
    backgroundColor: " #fff",
    border: "1px solid #3c3c3c",
    padding: "7px 25px 8px 7px",
    textAlign: "center",
    borderRadius: "4px",
    width: "56px",
    height: "40px",
    cursor: "pointer",
  },
  cartPagearrowContainer: {
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
  cartPageupArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer !important",
    width: "16px",
    height: "16px",
  },
  cartPageQuantity: {
    display: "flex !important",
    alignItems: "center",
    position: "relative",
    flexDirection: "column !important",
  },
  cartBin: {
    color: "#757575 !important",
    position: "absolute",
    top: "166%",
  },
  cartUpdateBtn: {
    border: " 1px solid #000 !important",
    backgroundColor: "#000  !important",
    color: " #fff  !important",
    textTransform: "capitalize !important",
    fontFamily: "enphase-visuelt-medium !important",
    borderRadius: "25px !important",
    cursor:"pointer",
    padding: "6px 20px 6px 20px !important",
    height: "36px",
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
      fontSize: "12px !important",
    },
  },

  //productDetailAccordian.jsx
  productDetailAccordianContainer: {
    margin: "20px 0px",
  },
  accTitle: {
    fontSize: "1.6rem !important",
    lineHeight: "1.3rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    paddingLeft: "30px !important",
    position: "relative",
    "@media (max-width: 800px)": {
      fontSize: "1.125rem !important",
    },
  },
  accordianContent: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight: "1.6rem !important",
    padding: "0 32px",
    marginBottom: "17px",
  },
  acclists: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight: "1.6rem !important",
  },
  productDetailacclistitems: {
    marginTop: "32px",
  },
  acclistTexts: {
    paddingBottom: "12px",
    listStyleType: "disc",
    marginLeft: "14px",
    textAlign: "left",
    lineHeight: "2.5rem !important",
    marginRight: "22px",
    color: "#000",
  },
  accTable: {
    borderCollapse: "collapse",
    borderColor: "#6e6e73",
  },
  accTableHead: {
    padding: "6px 16px",
    fontWeight: "400",
  },
  accTableContent: {
    marginRight: "20px !important",
    marginTop: "30px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight: "1.6rem !important",
  },

  //viewAll.jsx
  viewAllHeader: {
    display: "flex",
    justifyContent: "space-between",
    float: "none",
    maxWidth: "60%",
    "@media (max-width:500px)": {
      maxWidth: "88%",
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)": {
      maxWidth: "88%",
    },
    margin: "0 auto",
    alignItems: "center",
  },
  viewAllBagIcon: {
    fontSize: "0.875rem !important",
    position: "absolute",
    left: "-18%",
    "& .svg-small": {
      width: "16px !important",
      height: "16px !important",
      color: "#6e6e73 !important",
    },
  },
  viewAllHeading: {
    fontSize: "1.25rem !important",
    fontFamily: "enphase-visuelt-medium !important",
    "@media (max-width:500px)": {
      fontSize: "0.875rem !important",
      fontFamily: "enphase-visuelt-regular,sans-serif !important",
    },
  },
  viewAllSideText: {
    position: "relative",
    color: "#6e6e73 !important",
    fontSize: "0.875rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllDivider: {
    margin: "0.7em 15.5em !important",
    "@media (max-width:500px)": {
      margin: "10px 10px !important",
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)": {
      margin: "10px 40px !important",
    },
  },
  viewallContent: {
    padding: "20px 0px ",
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "97%",
    "@media screen and (min-width: 1650px) and (max-width: 2200px)": {
      maxWidth:"78%"
    }
  },
  viewAllItemHeader: {
    fontSize: "2rem !important",
    marginBottom: "20px !important",
    fontWeight: "normal !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllItemHeaderSub: {
    marginTop: "10px !important",
    fontSize: "2.625rem !important",
    fontWeight: "normal !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllItemHeaderpara: {
    fontSize: "1.25rem !important",
    fontWeight: "normal !important",
    lineHeight: "1.6em !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllCardContainer: {
    padding: "30px 0px",
    float:"none",
    margin:"0 auto",
    width:"100% !important",
  },
  //viewAllCard.jsx

  viewAllCard: {
    padding: "24px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    borderRadius: "16px !important",
    transition: "box-shadow .3s ease-out !important",
    position: "relative",
    height: "747px",
    marginBottom:"20px !important",
    boxShadow:"none !important",
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
      height:"500px",
    },
    "@media screen and (min-width: 478px) and (max-width: 800px)": {
      height:"600px"
    },
    "@media screen and (min-width: 1440px) and (max-width: 2240px)": {
        height:"850px"
    }
  },
  viewAllcardimg: {
    width: "100%",
    height: "auto",
    padding:"38px !important",
    "@media (max-width: 780px)": {
      padding:"0px !important",
    },
    transition: " opacity cubic-bezier(0.4,0,0.2,1) 500ms",
    
  },
  viewAllCardContent:{
    textAlign:"center !important"
  },
  viewAllprocode:{
    padding:"4px 8px !important",
    fontFamily: 'T-Star Pro !important',
    fontSize:' 0.75rem !important',
    lineHeight: '1em !important',
    letterSpacing: '0.05em !important',
    marginBottom:"12px !important",
    color:"#000 !important"
  },
  viewAlltitle:{
    color:"#000 !important",
    fontFamily: 'enphase-visuelt-regular,sans-serif !important',
    fontSize:' 1.5rem !important',
    lineHeight: '1.3em !important',
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
      fontSize:' 1.2rem !important',
  },
  },
  viewAllMobile:{
    "@media (max-width: 780px)": {
      width:"calc(100% + 8px) !important",
      marginLeft:"10px  !important"
    },
  },
  viewAllPrice:{
    background:"linear-gradient(to right,#FAF6EF 8%,#f0f0f0 18%,#FAF6EF 33%)",
    backgroundSize:"900px 104px",
    width: '100px',
    marginTop:"10px !important",
    textAlign:"center",
    margin: '0 auto !important',
    fontFamily:"enphase-visuelt-medium !important",
    color:"#000 !important",
  },
  viewAllCardFooter: {
    position: "absolute",
    bottom: '5%',
    //left: '24%',
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
     //   left: '23%',
    },
    "@media screen and (min-width: 478px) and (max-width: 1030px)": {
     // left: '17%',
  },
  },
  buttonContainer: {
    fontSize: "0.875rem  !important",
    justifyContent: "center",
    position: "relative !important",
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
        display:"block !important"
    },
  },
  learnbtn: {
    border: " 1px solid #000 !important",
    backgroundColor: "#000  !important",
    color: " #fff  !important",
    textTransform: "capitalize !important",
    fontFamily: "enphase-visuelt-medium !important",
    borderRadius: "25px !important",
    padding: "4px 20px 0 20px !important",
    height: "36px",
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
      fontSize: "12px !important",
    },
  },
  addbtn: {
    border: "1px solid #3c3c3c  !important",
    color: "#3c3c3c  !important",
    marginLeft: "50px !important",
    backgroundColor: "transparent  !important",
    borderRadius: "25px !important",
    padding: "4px 20px 0 20px !important",
    height: "36px",
    textTransform: "capitalize !important",
    fontFamily: "enphase-visuelt-medium !important",
    "@media screen and (min-width: 300px) and (max-width: 467px)": {
       fontSize: "12px !important",
      padding: "4px 15px 0 15px !important",
       marginLeft: "5px !important",
       marginTop:"10px !important",
    },
    "@media screen and (min-width: 767px) and (max-width: 1240px)": {
        marginLeft: "10px !important",
    }
  },

  //viewAllCategory.jsx

  viewAllCategory: {
    padding: "0px 20px ",
  },
  catList: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "16px !important",
  },
  catListLi: {
    padding: "8px 0px",
    display: "flex",
    cursor:"pointer",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accListItems:{
    padding:"12px 6px 12px 6px"
  },

  //viewAllMobile.jsx
  viewAllItemHeaderMobile: {
    fontSize: "1.375rem !important",
    fontWeight: "normal !important",
    listStyle: "none",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllItemHeaderMobileli: {
    marginBottom: "20px",
    fontSize: "16px !important",
    fontWeight: "normal !important",
    listStyle: "none",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },

  //Footer.jsx
  logo: {
    paddingLeft: "57px !important",
    marginTop: "-17px !important",
  },
  listItems: {
    marginTop: "30px",
    cursor: "pointer",
  },
  app_footer: {
    position: " relative",
    borderTop: "0.8px solid #dcdcd6",
    padding: "87px 0px 30px 0px",
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth:"78%",
    "@media (max-width: 500px)": {
      paddingTop: "20px",
    },
  },

  //FooterMobile.jsx
  Fmheadings: {
    color: "#6e6e73",
  },
  Fmlogo: {
    marginLeft: "20px",
    paddingBottom: "10px",
  },
  FmaccContainer: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "90%",
  },
  FmitemLists: {
    marginLeft: "10px !important",
  },

  //stepperDelivery.jsx
  DeliveryContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    position: "relative",
  },
  nextstep: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  continuebtn: {
    margin: "calc(3 * 8px) 0 calc(2 * 8px) !important",
    alignItems: "center !important",
    background: "#F37321 !important",
    borderRadius: "4px !important",
    padding: "1px 16px !important",
    cursor: "pointer !important",
    color: "#fff !important",
    display: "flex !important",
    fontSize: "16px !important",
    height: "48px !important",
    justifyContent: "center !important",
    position: "relative !important",
    width: "100% !important",
  },
  shipDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    overflow: "auto",
    margin: "0 0 16px",
    lineHeight: "24px",
  },
  shipTo: {
    fontFamily: "enphase-visuelt-medium !important",
    fontSize: "15px !important",
  },
  nameDet: {
    fontFamily: "enphase-visuelt-medium !important",
    fontWeight: "bold",
  },
  formSet: {
    backgroundColor: " #fff",
    marginBottom: "16px",
    outline: "none",
    width: "100%",
  },
  shippingMethod: {
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #e0e0e0",
    display: "flex",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shippingAssigne: {
    fontSize: "16px",
    lineHeight: "22px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginRight: "16px",
  },
  shippingCost: {
    display: "flex",
    fontSize: "16px",
    marginTop: "10px",
    paddingLeft: "32px",
    flexDirection: "column",
    alignSelf: "flex-start",
    flexShrink: "0",
    lineHeight: "22px",
    textAlign: "right",
  },
  //stepperShipping.jsx
  shippingContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
  },
  exitbtn: {
    letterSpacing: ".2px !important",
    fontSize: "11px !important",
    display: "flex !important",
    textAlign: "center !important",
    justifyContent: "center !important",
    color: "#707070 !important",
    padding: "5px 0 10px !important",
    outline: "none !important",
  },

  //stepperShippingForm.jsx
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

  //success.jsx
  successContaier: {
    textAlign: "center",
  },
  sucessBox: {
    padding: "16px",
    textAlign: "center",
    paddingTop: "48px",
    paddingBottom: "48px",
    maxWidth: "60%",
    margin: " 0 auto",
  },
  tick: {
    fill: "#50a159",
    width: "46px",
    height: "46px",
    marginBottom: "16px",
  },
  content: {
    color: "#000",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    marginBottom: "12px",
  },
  //checkOutContainer.jsx
  dialogBox: {
    "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
      margin: "0 !important",
      maxWidth: "880px !important",
    },
    "& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop": {
      backgroundColor: "rgba(2, 6, 2, 0.8) !important",
    },
  },
  summaryContainer: {
    display: "flex !important",
    backgroundColor: "#f9f9f9",
    flexDirection: "column !important",
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    width: "90% !important",
    "@media (max-width: 480px)": {
      width: "100% !important",
      //  padding: "0",
    },
    "@media screen and (min-width: 481px) and (max-width: 1024px)":{
      width: "100% !important",
    },
  },
  modalContainer: {
    flexFlow: "row nowrap !important",
    position: "relative",
    background: "#ffffff",
    borderRadius: "8px",
    borderTop: "none",
    overflowX: "hidden",
    overflowY: "auto",
    maxWidth: "880px",
  },
  sippingContainer: {
    flex: "1 1 auto",
    maxWidth: "700px",
    width: " 100%",
    display: "flex",
    padding: "10px",
    "@media (max-width: 480px)": {
      padding: "0 !important",
    },
  },
  modalheader: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
  },
  checkOutlogo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: 0,
    maxHeight: "48px",
    maxWidth: "204px",
  },
  stepperContainer: {
    display: "flex",
    width: "100%",
  },
  //checkOutOrderDisc.jsx
  couponTitle: {
    fontSize: "13px !important",
    color: "#F37321 !important",
    fontFamily: "enphase-visuelt-medium !important",
  },
  cartOrderDiscounContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "0px !important",
    borderBottom: "1px solid #F37321 !important",
  },
  discBox: {
    width: "100% !important",
    border:"none",
    background:"#F9F9F9",
    marginBottom: "0px !important",
    "&:focus":{
        outline:"none",
        background:"#F9F9F9 !important",
    },
    padding:"5px"
  },
  discApplyBtn: {
    color: "#F37321 !important",
    cursor: "pointer",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  //checkOutOrderSummary.jsx
  headerName: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    lineHeight: "20px !important",
    fontSize: "16px !important",
    alignItems: "center !important",
    fontWeight: "600 !important",
    textAlign: "left !important",
    marginBottom: "25px !important",
  },
  alignment: {
    // position: "absolute !important",
    // top: "17%",
    marginTop: "10%",
  },
  checkOutSummarycartItems: {
    overflowY: "auto",
    height: "95px",
    "&::-webkit-scrollbar": {
      width: "2px !important",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      outline: "1px solid slategrey",
      borderRadius: 7,
    },
  },
  checkSummarylistItems: {
    width: "100%",
    display: "flex",
    position: "relative",
    marginBottom: "10px",
    alignItems: "flex-start",
    textDecoration: "none",
  },
  listImg: {
    height: "62px",
    width: "62px",
    borderRadius: "4px",
    objectFit: "contain",
    background: "#fff",
    marginRight: "16px",
  },
  checkSummarylistDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "4px",
  },
  checkSummaryitemName: {
    width: "auto",
    maxWidth: "175px",
    position: "relative",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "15px !important",
    paddingRight: "1rem",
    overflow: "hidden",
    textAlign: "left",
  },
  checkSummaryitemPrice: {
    marginLeft: "auto",
    marginRight: "10px",
  },
  checkSummarylistQty: {
    overflowY: "hidden",
    lineHeight: "normal",
    color: " #6a7282",
    width: "100%",
  },
  checkSummarysubList: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
  },
  checkSummarysubTotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: "10px",
    color: "#707070",
    fontSize: "14px",
    lineHeight: "22px",
  },
  //headerSearch.jsx
  headerSearchButton: {
    color: "#F0F0F0 !important",
  },
  searchDropdown: {
    "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
      {
        padding: "16px 14px",
        marginTop: "3px",
        width: "25% !important",
        maxHeight: "500px",
      },
  },
  searchBox: {
    "& .css-1g24dm6-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "12.5px 14px !important",
    },
  },
  headersearchList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5px 0px",
    cursor: "pointer",
  },

  //stepperPayment.jsx
  spinnerBox: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9fa",
  },
  spinner: {
    color: "#f37321 !important",
  },
  PaymentContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    position: "relative",
    width: "100%",
  },
  TermsandCondition: {
    color: "#333",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.42857143",
    fontSize: "14px",
  },
  reqField: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontStyle: "normal",
    fontSize: "12px",
    color: "red",
  },
  checkBox: {
    padding: "0 !important",
  },
}));
