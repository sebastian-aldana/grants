import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box } from "@material-ui/core";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";
import GeneralInformation from "_molecules_/GeneralInformation/GeneralInformation";
import EligibilityInformation from "_molecules_/EligibilityInformation/EligibilityInformation";
import AdditionalInformation from "_molecules_/AdditionalInformation/AdditionalInformation";
import useStyles from "./GrantDetail.styles";

const GrantDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  const grantInformation = useSelector(getGrantInformation(id));

  const styles = useStyles();

  if (grantInformation) {
    return (
      <Box className={styles.container}>
        <GeneralInformation />
        <EligibilityInformation />
        <AdditionalInformation />
      </Box>
    );
  }

  return <></>;
};

export default GrantDetail;
