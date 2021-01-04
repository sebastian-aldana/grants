import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Paper,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";
import useStyles from "./EligibilityInformation.styles";

const EligibilityInformation = () => {
  const router = useRouter();

  const { id } = router.query;

  let information;

  const grantInformation = useSelector(getGrantInformation(id));

  if (grantInformation) {
    information = grantInformation.isSynopsis
      ? grantInformation.synopsis
      : grantInformation.forecast;
  }

  const styles = useStyles();

  return (
    <Card variant="outlined">
      <CardHeader title="Eligibility" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Eligigle Aplication:</Typography>
              <Box>
                {information.applicantTypes.map((types) => (
                  <p>{`${types.description}`}</p>
                ))}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Additional Information on Eligibility:</Typography>
              <p>{information.applicantEligibilityDesc}</p>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EligibilityInformation;
