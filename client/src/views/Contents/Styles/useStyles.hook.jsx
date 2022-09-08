import { makeStyles } from "@material-ui/styles";

export const useStyledComponent = () => {
  const useStyles = makeStyles(() => ({
    storageContainer: {
      paddingBottom: "40px",
    },
    cardimg: {
      width: "20%",
    },
    card: {
      maxWidth: 300,
      padding: "10px 20px",
      height: "500px",
      borderRadius: "16px !important",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      },
    },
    media: {
      paddingTop: "56.25%",
      height: "100%",
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
      fontSize: " 1.5rem !important",
      lineHeight: "1.3em",
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
      padding: "4px 20px 0 20px !important",
      height: "36px",
    },
    addbtn: {
      border: "1px solid #3c3c3c  !important",
      color: "#3c3c3c  !important",
      marginLeft: "10px !important",
      backgroundColor: "transparent  !important",
      borderRadius: "25px !important",
      padding: "4px 20px 0 20px !important",
      height: "36px",
      textTransform: "capitalize !important",
      fontFamily: "enphase-visuelt-medium !important",
    },
    buttonContainer: {
      fontSize: "0.875rem  !important",
      justifyContent: "center",
    },
  }));
  return {
    useStyles
  };
};
