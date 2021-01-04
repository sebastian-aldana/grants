import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";

const RelatedDocumentsTable = () => {
  const url = "https://www.grants.gov/grantsws/rest/opportunity/att/download";

  const router = useRouter();
  const { id } = router.query;

  const grantInformation = useSelector(getGrantInformation(id));

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">File Description</TableCell>
            <TableCell align="left">File Name</TableCell>
            <TableCell align="left">Last Updated Date/Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grantInformation.synopsisAttachmentFolders.map((attachment) => {
            return attachment.synopsisAttachments.map((document) => {
              return (
                <TableRow>
                  <TableCell align="left">{document.fileDescription}</TableCell>
                  <TableCell align="left">
                    <a href={`${url}/${document.id}`} target="_blank">
                      {document.fileName}
                    </a>
                  </TableCell>
                  <TableCell align="left">{document.createdDate}</TableCell>
                </TableRow>
              );
            });
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RelatedDocumentsTable;
