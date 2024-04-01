import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { setAge } from "../store/userSlice";
import { setStock, deleteItem } from "../store";
import { useState, memo, useMemo, useTransition } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import data from "../data";

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


function Cart() {
  //redux store가져와줌
  let cart = useSelector((state) => state.cart);
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); //store.js로 요청 보내주는 함수
  let [count, setCount] = useState(0);
  

  //컴포넌트 랜드링시 1회만 실행. (=useEffect랑 비슷함. 실행시점 차이)
  useMemo(() => {
    return 함수();
  }, [state]);

  return (
    <div>
      <h3>Email</h3>
      <p>wha02068@gmail.com</p>
      <h3>LinkedIn</h3>
      <a href="https://www.linkedin.com/in/haeun-kim-4758a7249/" target="_blank">https://www.linkedin.com/in/haeun-kim-4758a7249/</a>

    </div>
  );
}

export default Cart;
