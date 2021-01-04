import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from "@material-ui/core";
import { getGrants, getHitCount } from "_reducers_/grants/grants.selectors";
import {
  setParams,
  asyncGetGrants,
} from "_reducers_/grants/grants.async-actions";

const GranstTable = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  const grants = useSelector(getGrants(page));

  const hitCount = useSelector(getHitCount);

  const handleChangePage = (event, newPage) => {
    const startRecordNum = newPage * 25;
    dispatch(setParams({ startRecordNum }));
    dispatch(asyncGetGrants());
    setPage(newPage);
  };

  if (grants) {
    return (
      <Box>
        <TablePagination
          component="div"
          count={hitCount}
          rowsPerPageOptions={[25]}
          rowsPerPage={25}
          page={page}
          onChangePage={handleChangePage}
        />
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
        <TablePagination
          component="div"
          count={hitCount}
          rowsPerPageOptions={[25]}
          rowsPerPage={25}
          page={page}
          onChangePage={handleChangePage}
        />
      </Box>
    );
  }
  return <></>;
};

export default GranstTable;
