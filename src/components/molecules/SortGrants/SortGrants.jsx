import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Autocomplete } from "@material-ui/lab";
import { Box, TextField, Button } from "@material-ui/core";
import useStyles from "./SortGrants.styles";
import {
  asyncGetGrants,
  setParams,
} from "_reducers_/grants/grants.async-actions";

const SortGrants = () => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const options = [
    { label: "Oportunity Number (Ascending)", value: "oppNum|asc" },
    { label: "Oportunity Number (Descending)", value: "oppNum|desc" },
    { label: "Oportunity Title (Ascending)", value: "oppName|asc" },
    { label: "Oportunity Title (Descending)", value: "oppName|desc" },
    { label: "Agency (Ascending)", value: "agency|asc" },
    { label: "Agency (Descending)", value: "agency|desc" },
    { label: "Posted Date (Ascending)", value: "openDate|asc" },
    { label: "Posted Date (Descending)", value: "openDate|desc" },
    { label: "Close Date (Ascending)", value: "closeDate|asc" },
    { label: "Close Date (Descending)", value: "closeDate|desc" },
  ];

  const [sortGrants, setSortGrants] = useState({
    label: "Posted Date (Ascending)",
    value: "openDate|asc",
  });

  const handleSortType = (_event, newValue) => {
    if (!newValue) {
      dispatch(setParams({ sortBy: newValue.value }));
      setSortGrants({
        label: "Posted Date (Ascending)",
        value: "openDate|asc",
      });
    } else {
      dispatch(setParams({ sortBy: newValue.value }));
      setSortGrants(newValue);
    }
  };

  const getGrants = () => {
    dispatch(asyncGetGrants());
  };

  return (
    <Box className={styles.container}>
      <Autocomplete
        id="sort-grants"
        options={options}
        value={sortGrants}
        defaultValue="Oportunity Number (Ascending)"
        className={styles.autoCompleteContainer}
        onChange={handleSortType}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} size="small" variant="outlined" />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={getGrants}
        className={styles.button}
      >
        Update Sort
      </Button>
    </Box>
  );
};

export default SortGrants;
