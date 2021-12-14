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
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const UserTable = ({
  admin_service,
  Login,
  setMemberInfo,
  memberInfo,
  page,
  setPage,
  message,
  setMessage,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getListData = (newPage) => {
    admin_service.MemeberInquire(Login, newPage).then((result) => {
      setMemberInfo(result);
    });
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
    setMessage(id);
  };

  return (
    <>
      {memberInfo ? (
        <TableContainer component={Paper}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">withdraw</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {memberInfo.data.content
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                .map(({ id, nickname, role }, i) => (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      {page * rowsPerPage + i + 1}
                    </TableCell>
                    <TableCell align="right">{id}</TableCell>
                    <TableCell align="right">{nickname}</TableCell>
                    <TableCell align="right">{role}</TableCell>
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
                  count={memberInfo.data.content.length}
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

export default UserTable;

// 이 컴포넌트에서의 문제점과 해결한 방법
// memberInfo가 처음에 Login값이 없어서 error메세지가 문자열로와 {memberInfo ? 이 뒷부분이 실행됨
// 하지만 memberInfo에 있는 값을 map으로 돌려야 하는 로직이라 바로에러 발생
// 그래서 false값을 return해줌
// 나는 삼항연산자식을 쓴 jsx구문에서 일단 두개다 보내는줄 알았는데 경우가 맞는 컴포넌트만 보냄
