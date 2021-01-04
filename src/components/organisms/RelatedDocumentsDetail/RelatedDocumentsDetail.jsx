import React from "react";
import { Box, Card, CardContent, CardHeader } from "@material-ui/core";
import RelatedInformationTable from "_molecules_/RelatedInformationTable/RelatedInformationTable";
import RelatedDocumentTable from "_molecules_/RelatedDocumentsTable/RelatedDocumentTable";
import useStyles from "./RelatedDocumentsDetail.styles";

const RelatedDocumentsDetail = () => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Card>
        <CardHeader title="Click on the following link(s) to view the related information:" />
        <CardContent>
          <RelatedInformationTable />
        </CardContent>
        <CardHeader title="Click on the following file link(s) to download the related document(s):" />
        <CardContent>
          <RelatedDocumentTable />
        </CardContent>
      </Card>
    </Box>
  );
};

export default RelatedDocumentsDetail;
