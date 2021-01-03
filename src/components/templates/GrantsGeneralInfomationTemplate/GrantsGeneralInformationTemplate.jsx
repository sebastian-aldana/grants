import React from "react";
import { Box } from "@material-ui/core";
import GrantsTable from "_organisms_/GrantsTable/GrantsTable";
import OpportunityStatus from "_molecules_/OportunityStatus/OportunityStatus";
import SearchGrant from "_molecules_/SearchGrant/SearchGrant";
import DateRange from "_molecules_/DateRange/DateRange";
import SortGrants from "_molecules_/SortGrants/SortGrants";
import useStyles from "./GrantsGeneralInformationTemplate.styles";

const GrantsGeneralInformationTemplate = () => {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.generalFiltersContainer}>
        <div />
        <div className={styles.filterContainer}>
          <SearchGrant />
          <SortGrants />
          <DateRange />
        </div>
      </Box>
      <Box className={styles.tableContainer}>
        <OpportunityStatus />
        <GrantsTable />
      </Box>
    </>
  );
};

export default GrantsGeneralInformationTemplate;
