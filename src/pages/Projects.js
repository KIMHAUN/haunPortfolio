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
import { TablePagination } from '@mui/base/TablePagination';

//memo : 꼭 필요할 때만 재랜더링함.- 특정 상황 : 전달하는 props가 변할 때만
//무거운 컴포넌트. 대부분 안씀
let Child = memo(function () {
  //console.log("재랜더링");
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
    fontSize: 12,
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

function createData(client, name, duration, task, language, dbms, os, etc, des) {
  return {client, name, duration, task, language, dbms, os, etc, des};
}

const rows = [
  createData('Ntels', 'Daas BSS/OSS', '2022.Nov ~ 2023.Feb', 'Project Framework Review, React Shared Component Development', 'React, Next.js','Mysql', 'Linux', '', 'BSS Dashboard'),
  createData('Ntels', 'Government-funded Project Planning (SaaS Transformation)', '2022.Feb ~ 2022.Mar', 'AWS Architecture Design, Pricing Investigation', 'Java, AWS Cloud', 'AWS DBMS', 'Amazon SQS ', 'draw.io' , 'AWS Architecture Design Lead'),
  createData('Ntels', 'Daas BSS/OSS', '2022.Nov ~ 2023.Feb', 'Project Framework Review, React Shared Component Research', 'React, Next.js','Mysql', 'Linux', '', 'BSS Dashboard'),

  createData('Ntels', 'ATOM/PCF', '2022.Oct ~ 2022.Nov', 'Migrate Statistical Data to Vertica', 'Java Spring', 'Mysql', 'tomcat', 'Vertica', 'Dashboard Vertica Query Migration'),
  createData('Ntels', 'ATOM-IP/MDN', '2022.Aug ~ 2022.Sep', 'Development of a business sharing bulletin board', 'Java Spring', 'Mysql', 'tomcat', 'summernote', 'Development of a business sharing bulletin board'),
  createData('Ntels', 'ATOM-PCF', '2022.May ~ 2022.Jul', 'Development and Modification of PN/CR Requirements:Improvement requested for DM Statistics to allow selection by message type (CCR, RAR, AAR, etc.), Improvement requested for Alarm Statistics to display all selected nodes on the statistical graph, etc.', 'Java7 Spring', 'Mysql', 'tomcat', 'Requirements Development'),
  createData('Ntels', 'MEO Portal', '2022.Jan ~ 2022.Apr', 'Development of New Menu for POD Status Inquiry/History and Filter Condition Creation', 'Java8, Spring','Mysql', 'Apache Tomcat', '', 'New Menu Development, QA Bug Improvement'),
  createData('Ntels', 'MEO Portal', '2022.Dec ~ 2022.Jan', 'Language Settings for Four Submenus under Alarm', 'Java Spring', 'Mysql', 'Linux/Apache,Tomcat', '', 'Multilingual Language Settings for the Project'),

  createData('NeoPlus(LG U+)','System Management of U+Page', '2021.Aug ~ 2021.Sep', 'Inquiry Response and Weather API Enhancement', 'Java Spring framework', 'Oracle', 'Redhat Linux/Apache,Tomcat', '', 'Employee Replacement for One Month Sick Leave'),
  createData('NeoPlus(LG U+)','Micro-payment Enhancement', '2021.Jan ~ 2021.Aug', 'PG Management (PG, CRUD of each of administrator of PG, ETC.), Micro-payment Helpdesk, Micro-payment Inquiry Board, Micro-payment Inquiry Management, Micro-payment Announcements, Service Synchronization, Performance Adjustment, Blocking Information Synchronization, External Integration, PG OB Requests, PG OB Request History, Payment Attempt History Inquiry, Micro-payment Helpdesk (Authorization Difference - Administrator/Counselor), PG OB Request (Blocking) - Email Integration, PG OB Request (Charge) - Email Integration, Access to Counsel Management Automatic OB Results, Integrated Homepage, Customer Service App, Micro-payment Complaints Management, Counseling History Management, Illegal Device Management, Micro-payment Password, Statistics & Performance, Transaction Amount Status by Range, Major Merchant Performance, PG Management System (PG Site) - PG Information & Personnel Changes, Homepage (User End) - Payment Blocking/Unblocking', 'Java/AWS cloud', 'Oracle → mysql(AWS)','Apache Tomcat', 'File Upload (Server → S3), Email Service (AWS SMTP), Docker, External Integration - ESB, NCAS, NCS', 'Micro-payment administration site, PG site, Homepage (user end) migration'),
  createData('NeoPlus(LG U+)','Advancement and improvement of U+Page', '2020.Sep ~ 2021.Jan', 'Statistics Management, Seasonal Logo Management, Menu Management, Content Management, Category Management', 'Java, Struts → Spring framework', 'Altibase → Oracle', 'Apache 2.4.46,Tomcat 8.5.57', 'Windows2008 → Redhat Linux', 'U+Page admin page migration'),  
  createData('NeoPlus(LG U+)','U+VR Overseas export server development', '2020.May ~ 2020.Sep', 'QnA Management, Export to Excel (Statistics: Daily, Periodic, Monthly), Bulk VOD Registration (Excel Upload), Event Banner Management, Notice and Event/Banner Management (Update), Popup Management, User Management: ID Restriction', 'Java Spring', 'Oracle', 'Linux Tomcat', 'AWS', 'API for U+ VR Overseas Export Server Development and Admin Panel'),
  createData('NeoPlus(LG U+)','U+VR service cloud solution PoC server development', '2020.Apr ~ 2020.May', 'CTN Management, Notice and Event Management, Banner Management', 'Java Spring', 'Oracle', 'Linux Tomcat', 'AWS', 'Development of VR AWS PoC Menu'),
  createData('NeoPlus(LG U+)','U+VR UX improvement', '2020.Mar ~ 2020.Apr', 'Add Terms Management and Consent Content for Selected Terms', 'Java Spring', 'Oracle', 'Linux Tomcat', '', 'Add Terms Management and Consent Content for Selected Terms'),
  createData('NeoPlus(LG U+)','U+VR Government-funded Server Development', '2020.Jan ~ 2020.Feb', 'API Development - Live Broadcast Banner Retrieval API, Live Broadcast Content Retrieval API, Admin Development - Live Broadcast Banner Management , Live Content Registration/Retrieval , Content Scheduling Management, Content Registration/Retrieval', 'Java1.8.0_172/Spring3.2.16','Oracle 18.4.0 RAC', 'Linux/Apache 2.4.33 Tomcat 8.5.31','', 'Add Live Broadcast Banner Management Menu'),
  createData('NeoPlus(LG U+)','Roaming giftcard admin ', '2019.Sep ~ 2019.Nov', 'add features of searching product status and searching phone number, Partner Manual Development, Fixing bug', 'Java 1.8{"\n"}Spring4', 'Oracle 12c', 'Linux/Apache Tomcat 8.5', 'DBCP, nCas, uCube, xPay', 'Enhancement of Roaming Voucher Administration Feature'),
  createData('NeoPlus(LG U+)','Drone portal site', '2019.May ~ 2019.Jul', 'Banner of admin site, introduce of drone, Drone-related website, Administrator, PC, and Mobile Manuals development', 'Java Spring', 'Oracle', 'Redhat Linux/Apache Tomcat', '', 'Drone service website development'),
  

  
  
];

export default function BasicTable() {
  return (
    <div style={{ padding:'10px' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" rowspan={2}>Client</StyledTableCell>
            <StyledTableCell align="center" rowspan={2}>Name</StyledTableCell>
            <StyledTableCell align="center" rowspan={2}>Duration</StyledTableCell>
            <StyledTableCell align="center" rowspan={2}>Task</StyledTableCell>
            <StyledTableCell align="center" colspan={4}>Development environment</StyledTableCell>
            <StyledTableCell align="center" rowspan={2}>Description</StyledTableCell>
          </TableRow>
          <TableRow>
              <StyledTableCell>Programming Language<br/>Framework</StyledTableCell>
              <StyledTableCell align="center">
                DBMS
              </StyledTableCell>
              <StyledTableCell align="center">
                OS<br/>Middleware
              </StyledTableCell>
              <StyledTableCell align="center">
                E.T.C. solution
              </StyledTableCell>
              
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
              <StyledTableCell align="right">{row.language}</StyledTableCell>
              <StyledTableCell align="right">{row.dbms}</StyledTableCell>
              <StyledTableCell align="right">{row.os}</StyledTableCell>
              <StyledTableCell align="right">{row.etc}</StyledTableCell>
              <StyledTableCell align="right">{row.des}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
    </div>
  );
}
