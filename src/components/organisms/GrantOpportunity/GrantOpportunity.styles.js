import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  container: {
    margin: "20px",
  },
  informationContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr 1fr",
    gridGap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
}));
