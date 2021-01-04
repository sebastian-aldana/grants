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

const versionHistoryTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Version</TableCell>
            <TableCell align="center">Modification Description</TableCell>
            <TableCell align="center">Updated Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">Synopsis 4</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Dec 21, 2020</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default versionHistoryTable;
