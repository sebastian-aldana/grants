import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getGrants } from "_reducers_/grants/grants.selectors";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const GranstTable = () => {
  const router = useRouter();
  const grants = useSelector(getGrants);
  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Oportunity Number</TableCell>
              <TableCell>Oportunity Title</TableCell>
              <TableCell>Agency</TableCell>
              <TableCell>Oportunity Status</TableCell>
              <TableCell>Posted Date</TableCell>
              <TableCell>CloseDate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grants.map((grant) => (
              <TableRow
                onClick={() =>
                  router.push(
                    `/grantDetail${grant.id ? `?id=${grant.id}` : ""}`
                  )
                }
                key={grant.id}
              >
                <TableCell>{grant.number}</TableCell>
                <TableCell>{grant.title}</TableCell>
                <TableCell>{grant.agencyCode}</TableCell>
                <TableCell>{grant.oppStatus}</TableCell>
                <TableCell>{grant.openDate}</TableCell>
                <TableCell>{grant.closeDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default GranstTable;
