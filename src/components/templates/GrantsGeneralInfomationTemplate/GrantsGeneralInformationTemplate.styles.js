import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  tableContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 10fr",
    gridGap: "25px",
  },
  generalFiltersContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 10fr",
  },
  filterContainer: {
    display: "flex",
    padding: "20px",
  },
}));
