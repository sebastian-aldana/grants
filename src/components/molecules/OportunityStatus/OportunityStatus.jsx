import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, Checkbox, FormControlLabel } from "@material-ui/core";
import useStyles from "./OportunityStatus.styles";
import { getParams } from "_reducers_/grants/grants.selectors";
import {
  setParams,
  asyncGetGrants,
} from "_reducers_/grants/grants.async-actions";

const OpportunityStatus = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { oppStatuses } = useSelector(getParams);

  const listOfOppStatuses = useMemo(() => oppStatuses.split("|"), [
    oppStatuses,
  ]);

  const updateOportunityStatus = ({ target: { value } }) => {
    let oppStatus = [];
    if (!listOfOppStatuses.includes(value)) {
      oppStatus = [...listOfOppStatuses, value];
    } else {
      oppStatus = listOfOppStatuses.filter((status) => status !== value);
    }
    if (oppStatus.length === 0) {
      oppStatus = ["forecasted", "posted"];
    }
    let oppStatusString = oppStatus.join("|");
    if (oppStatusString[0] === "|") {
      oppStatusString = oppStatusString.slice(1);
    }
    dispatch(setParams({ oppStatuses: oppStatusString }));
    dispatch(asyncGetGrants());
  };

  return (
    <Box className={styles.container}>
      <Typography>Opportunity Status</Typography>
      <FormControlLabel
        label="ForeCasted"
        control={
          <Checkbox
            onChange={updateOportunityStatus}
            checked={oppStatuses.includes("forecasted")}
            value="forecasted"
          />
        }
      />
      <FormControlLabel
        label="Posted"
        control={
          <Checkbox
            onChange={updateOportunityStatus}
            checked={oppStatuses.includes("posted")}
            value="posted"
          />
        }
      />
      <FormControlLabel
        label="Closed"
        control={
          <Checkbox
            onChange={updateOportunityStatus}
            checked={oppStatuses.includes("closed")}
            value="closed"
          />
        }
      />
      <FormControlLabel
        label="Archived"
        control={
          <Checkbox
            onChange={updateOportunityStatus}
            checked={oppStatuses.includes("archived")}
            value="archived"
          />
        }
      />
    </Box>
  );
};

export default OpportunityStatus;
