import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import {
  setParams,
  asyncGetGrants,
} from "_reducers_/grants/grants.async-actions";
import { Button, TextField, Box } from "@material-ui/core";
import useStyles from "./DateRange.styles";

const DateRange = () => {
  const dispatch = useDispatch();

  const options = [
    { label: "All avalaible", value: "" },
    { label: "Posted Date - Last 3 Days", value: "3" },
    { label: "Posted Date - Last 1 week ", value: "7" },
    { label: "Posted Date - Last 2 week ", value: "14" },
    { label: "Posted Date - Last 3 week ", value: "21" },
    { label: "Posted Date - Last 4 week ", value: "28" },
    { label: "Posted Date - Last 5 week ", value: "35" },
    { label: "Posted Date - Last 6 week ", value: "42" },
    { label: "Posted Date - Last 7 week ", value: "49" },
    { label: "Posted Date - Last 8 week ", value: "56" },
  ];

  const [dateRange, SetDateRange] = useState({
    label: "All avalaible",
    value: "",
  });

  const styles = useStyles();

  const handleDateRange = (event, newValue) => {
    if (!newValue) {
      dispatch(setParams({ dateRange: "" }));
      SetDateRange({
        label: "All avalaible",
        value: "",
      });
    } else {
      dispatch(setParams({ dateRange: newValue.value }));
      SetDateRange(newValue);
    }
  };

  const getGrants = () => {
    dispatch(asyncGetGrants());
  };

  return (
    <Box className={styles.container}>
      <Autocomplete
        id="date-range"
        options={options}
        className={styles.autoCompleteContainer}
        onChange={handleDateRange}
        value={dateRange}
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
        Update Date Range
      </Button>
    </Box>
  );
};

export default DateRange;
