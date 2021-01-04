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

const RelatedInformationTable = () => {
  const router = useRouter();
  const { id } = router.query;

  const grantInformation = useSelector(getGrantInformation(id));

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Link</TableCell>
            <TableCell align="left">Last Updated Date/Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grantInformation.synopsisDocumentURLs.map((document) => (
            <TableRow>
              <TableCell align="left">{document.description}</TableCell>
              <TableCell align="left">
                <a href={document.docUrl}>{document.docUrl}</a>
              </TableCell>
              <TableCell align="left">{document.createdDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RelatedInformationTable;
