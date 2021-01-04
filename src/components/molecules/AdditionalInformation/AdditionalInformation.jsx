import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  Card,
  CardHeader,
  CardContent,
  Paper,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";
import useStyles from "./AdditionalInformation.styles";

const AdditionalInformation = () => {
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
      <CardHeader title="Additional Information" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Additional Information:</Typography>
              <p>{information.agencyContactName}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Description:</Typography>
              <div
                dangerouslySetInnerHTML={{
                  __html: grantInformation.isSynopsis
                    ? information.synopsisDesc
                    : information.forecastDesc,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Grantor Contact Information:</Typography>
              <p>{information.fundingDescLinkUrl}</p>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AdditionalInformation;
