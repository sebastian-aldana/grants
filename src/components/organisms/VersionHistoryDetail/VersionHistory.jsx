import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import VersionHistoryTable from "_molecules_/VersionHistoryTable/VersionHistoryTable";
import useStyles from "./VersionHistory.styles";

const VersionHistory = () => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Card>
        <CardHeader title="Version History" />
        <CardContent>
          <Typography>
            Click on Version Name to view previous versions of this grant
            opportunity. Modifications from the previous version are highlighted
            with a light gray background. For more information on versions, see
            Online Help.
          </Typography>
          <Box>
            <CardHeader title="Synopsis History:" />
            <CardContent>
              <VersionHistoryTable />
            </CardContent>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VersionHistory;
