import "./App.css";
import { createContext, Suspense, useEffect, useState, lazy } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/dinosours.jpg";
import profile from "./img/profile.jpg";
import data from "./data";
import axios from "axios";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useQuery } from "react-query";

//import Detail from "./pages/Detail";
//import Cart from "./pages/Cart";

const Detail = lazy(() => import("./pages/Detail.js"));
const Cart = lazy(() => import("./pages/Cart.js"));
const Projects = lazy(() => import("./pages/Projects.js"));
const AboutMe = lazy(() => import("./pages/AboutMe.js"));
const Contact = lazy(() => import("./pages/Contact.js"));

//context : state 보관함
export let Context1 = createContext();


function App() {
  // useEffect(() => {
  //   if (localStorage.getItem("watched").length == 0) {
    
  //     localStorage.setItem("watched", JSON.stringify([]));
  //   }
  // }, []);

  let obj = { name: "kim" };
  localStorage.setItem("data", JSON.stringify(obj));
  let 꺼낸거 = localStorage.getItem("data");
  //console.log(JSON.parse(꺼낸거));

  let [shoes, setShoes] = useState(data);
  let [재고, 재고변경] = useState([10, 11, 12]);
  let navigate = useNavigate(); //hook : 유용한 정보가 들어있는 함수

  let result = useQuery(
    ["작명"],
    () =>
      axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
        console.log("refetch");
        return a.data;
      }),
    {
      staleTime: 2000,
    }
  );
  //console.log(result.data);
  //console.log(result.isLoading);
  //console.log(result.error);

  return (
    <div className="App">
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            Haeun Kim
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/aboutMe");
              }}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              Challenge
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              E.T.C.
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && "로딩중"}
            {result.error && "에러남"}
            {result.data && result.data.name}
          </Nav>
        </Container>
        <Link to="/"> 홈 </Link>
        <Link to="/detail/0"> 상세 페이지</Link>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      { <Suspense fallback={<div>로딩중임</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                    <div
                      className="profile-img"
                      style={{ backgroundImage: "url(" + profile + ")" }}
                    ></div>
                    <div class="content">
                      <span class="boldText">Thanks for coming!🙌 </span>
                      <br/>
                      My name is <span class="boldText">Hannah</span> 
                      <br/>
                      I'm born and bred in Korea.
                      <br/>
                      <br/>
                      My father was a teacher at a computer academy.
                      <br/>
                      and due to my fast typing speed, I was able to learn coding quickly. 
                      <br/>
                      As a result, I switched majors from corrections to computer science
                      <br/>
                      and even took on the role of a teaching assistant.
                      <br/>
                      I became the first protege of the compiler professor.🎈                     
                      <br/>
                      <br/>
                      I made this blog for introducing myself.
                    
                    </div>
                {/* <Row>
                  {shoes.map(function (a, i) {
                    let img =
                      "https://codingapple1.github.io/shop/shoes" +
                      (parseInt(i) + 1) +
                      ".jpg";
                    return (
                      <Item
                        key={i}
                        i={i}
                        title={shoes[i].name}
                        content={shoes[i].content}
                        price={shoes[i].price}
                        src={img}
                      ></Item>
                    );
                  })}
                </Row> */}
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
          <Route
            path="/detail/:id"
            element={
              <Context1.Provider value={{ 재고, shoes }}>
                <Detail shoes={shoes} />
              </Context1.Provider>
            }
          />
          <Route path="*" element={<div>404</div>} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보</div>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense> }
      <Container></Container>
    </div>
  );
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

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
