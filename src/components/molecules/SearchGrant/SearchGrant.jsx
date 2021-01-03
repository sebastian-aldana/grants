import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setParams,
  asyncGetGrants,
} from "_reducers_/grants/grants.async-actions";
import { TextField, Button, Box } from "@material-ui/core";
import useStyles from "./SearchGrant.styles";

const SearchGrant = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = ({ target }) => {
    dispatch(setParams({ keyword: target.value }));
    setSearchValue(target.value);
  };

  const getGrants = () => {
    dispatch(asyncGetGrants());
  };

  return (
    <Box className={styles.container}>
      <TextField
        size="small"
        label="Search Grant"
        variant="outlined"
        value={searchValue}
        onChange={handleSearch}
      />
      <Button
        color="primary"
        onClick={getGrants}
        variant="contained"
        className={styles.button}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchGrant;
