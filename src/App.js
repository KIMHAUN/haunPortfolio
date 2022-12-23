import "./App.css";
import { useState } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import data from "./data";
import axios from "axios";

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let [shoes, setShoes] = useState(data);

  let navigate = useNavigate(); //hook : 유용한 정보가 들어있는 함수

  return (
    <div className="App">
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            연팽
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
        <Link to="/"> 홈 </Link>
        <Link to="/detail/0"> 상세 페이지</Link>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              <Row>
                {shoes.map(function (a, i) {
                  let img =
                    "https://codingapple1.github.io/shop/shoes" +
                    (parseInt(i) + 1) +
                    ".jpg";
                  return (
                    <Item
                      i={i}
                      title={shoes[i].title}
                      content={shoes[i].content}
                      price={shoes[i].price}
                      src={img}
                    ></Item>
                  );
                })}
              </Row>
              <br />
              <button
                onClick={() => {
                  //로딩중 UI 띄우기
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((data) => {
                      let copiedShoes = [...shoes, ...data.data];
                      //copiedShoes.push(...data.data);
                      setShoes(copiedShoes);
                      //로딩중 UI숨기기~
                    })
                    .catch(() => {
                      //로딩중 UI 숨기기~
                      console.log("실패");
                    });

                  //axios.post("/url", { name: "kim" });
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>
      </Routes>
      <Container></Container>
    </div>
  );
}

function Item(props) {
  let navigate = useNavigate();
  return (
    <Col
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

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
