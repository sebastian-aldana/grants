import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";
import useStyles from "./GrantOpportunity.styles";

const GrantOpportunity = () => {
  const router = useRouter();

  const { id } = router.query;

  const styles = useStyles();

  const grantInformation = useSelector(getGrantInformation(id));

  const openInGrants = () => {
    const url = `https://www.grants.gov/web/grants/view-opportunity.html?oppId=${id}`;
    window.open(url);
  };

  if (grantInformation) {
    const topAgencyCode = grantInformation.agencyDetails.topAgencyCode;

    const urlImg = "https://www.grants.gov/custom/images/logo";

    return (
      <Box className={styles.container}>
        <Box>
          <Typography variant="h4">View Grant Opportunity</Typography>
        </Box>
        <Box className={styles.informationContainer}>
          <Box>
            <img src={`${urlImg}/${topAgencyCode}.png`} alt="" srcset="" />
          </Box>
          <Box>
            <Typography variant="h6">
              {grantInformation.opportunityNumber}
            </Typography>
            <Typography variant="h6">
              {grantInformation.opportunityTitle}
            </Typography>
            <Typography variant="h6">
              {grantInformation.topAgencyDetails.agencyName}
            </Typography>
            <Typography variant="h6">
              {grantInformation.agencyDetails.agencyName}
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" onClick={openInGrants} color="primary">
              Open in grants.com
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return <></>;
};

export default GrantOpportunity;
