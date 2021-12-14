import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Cartegorytable = ({
  cartegory,
  setPage,
  page,
  setCartegoryAddMessage,
  setCartegoryDeleteMessage,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getListData = (newPage) => {
    console.log(newPage);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getListData(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const onDelete = (id) => {
    setCartegoryDeleteMessage(id);
  };
  const onAdd = () => {
    setCartegoryAddMessage(true);
  };

  return (
    <>
      {cartegory ? (
        <TableContainer component={Paper}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Add</TableCell>
                <TableCell align="right">withdraw</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartegory.data
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                .map(({ id, name }, i) => (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      {page * rowsPerPage + i + 1}
                    </TableCell>
                    <TableCell align="right">{id}</TableCell>
                    <TableCell align="right">{name}</TableCell>
                    <TableCell align="right">
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        size="2x"
                        onClick={() => {
                          onAdd();
                        }}
                      ></FontAwesomeIcon>
                    </TableCell>
                    <TableCell align="right">
                      <FontAwesomeIcon
                        icon={faTrash}
                        size="2x"
                        onClick={() => {
                          onDelete(id);
                        }}
                      ></FontAwesomeIcon>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={cartegory.data.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cartegorytable;
