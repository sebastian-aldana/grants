import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";
import useStyles from "./GeneralInformation.styles";

const GeneralInformation = () => {
  const styles = useStyles();

  const router = useRouter();

  const { id } = router.query;

  let information;

  const grantInformation = useSelector(getGrantInformation(id));

  if (grantInformation) {
    information = grantInformation.isSynopsis
      ? grantInformation.synopsis
      : grantInformation.forecast;
  }

  return (
    <Card variant="outlined">
      <CardHeader title="General Information" />
      <CardContent className={styles.itemGridContainer}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Funding Opportunity Number:</Typography>
              <p>{` ${grantInformation.opportunityNumber}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Funding Opportunity Title:</Typography>
              <p>{` ${grantInformation.opportunityTitle}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Opportunity Category</Typography>
              <p>{` ${grantInformation.opportunityCategory.description}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Funging Instrument Type:</Typography>
              <div>
                {information.fundingInstruments.map((instrument) => (
                  <p>{`${instrument.description}`}</p>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Category of Funding Activity:</Typography>
              <div>
                {information.fundingActivityCategories.map((activity) => (
                  <p>{`${activity.description}`}</p>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Category Explanation:</Typography>
              <p>{` ${information.fundingActivityCategoryDesc}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>CFDA number(s):</Typography>
              <div>
                {grantInformation.cfdas.map((cfda) => (
                  <p>{`${cfda.cfdaNumber} -- ${cfda.programTitle}`}</p>
                ))}
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Version:</Typography>
              <p>{` ${information.version}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Posted Date:</Typography>
              <p>{` ${information.postingDate}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Last Updated Date:</Typography>
              <p>{` ${information.lastUpdatedDate}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Original clossing Date for Applications:</Typography>
              <p>{`${information.originalDueDate}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Current Closing Date for Applications:</Typography>
              <p>{`${information.responseDate}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Archive Date:</Typography>
              <p>{` ${information.archiveDate}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Estimated Total Program Funding: </Typography>
              <p>{` ${information.estimatedFundingFormatted}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Award Ceiling:</Typography>
              <p>{` ${information.awardCeilingFormatted}`}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={styles.itemGridContainer}>
              <Typography>Award Floor:</Typography>
              <p>{` ${information.awardFloorFormatted}`}</p>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GeneralInformation;
