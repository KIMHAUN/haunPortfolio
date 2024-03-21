import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { setAge } from "../store/userSlice";
import { setStock, deleteItem } from "../store";
import { useState, memo, useMemo, useTransition } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

//memo : 꼭 필요할 때만 재랜더링함.- 특정 상황 : 전달하는 props가 변할 때만
//무거운 컴포넌트. 대부분 안씀
let Child = memo(function () {
  console.log("재랜더링");
  return <div>자식임</div>;
});
//let [projects, setProjects] = useState(data);
function 함수() {
  //
}


function Item(props) {
  let navigate = useNavigate();
  return (
    <Col
      md={4}
      sm
      onClick={() => {
        navigate("/detail/" + [props.i]);
      }}
    >
      <img src={props.src} width="80%" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </Col>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(client, name, duration, task, technologies, des) {
  return { client, name, duration, task, technologies, des};
}

const rows = [
  createData('NeoPlus(LG U+)','Drone portal site', '2019.May ~ 19.Jul', 'Task', 'technologies', 'Description'),
  createData('NeoPlus(LG U+)','Roaming giftcard admin ', '2019.Sep ~ 19.Nov', 'Task', 'technologies', 'Description'),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Client</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right">Task</StyledTableCell>
            <StyledTableCell align="right">Technologies&nbsp;Used</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.client}
              </StyledTableCell>
              
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.duration}</StyledTableCell>
              <StyledTableCell align="right">{row.task}</StyledTableCell>
              <StyledTableCell align="right">{row.technologies}</StyledTableCell>
              <StyledTableCell align="right">{row.des}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
