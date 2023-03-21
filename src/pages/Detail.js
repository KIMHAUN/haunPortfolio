import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../App.css";
import { Nav } from "react-bootstrap";
import { Context1 } from "./../App";
import { order } from "./../store";
import App from "../App";

//css까지 안가도 js에서 스타일 적용
//스타일이 다른 js파일로 오염되지 않음. - App.modules.css로 사용하면 오염 x (모듈화)
//페이지 로딩시간 단축(css파일 로딩 X)

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

export default function Detail(props) {
  //보관함 해체
  let { 재고, shoes } = useContext(Context1);
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [할인, set할인] = useState(true);
  let [경고, 경고변경] = useState(false);
  let [num, setNum] = useState(0);
  let numeric = /^[0-9]+$/;
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState("");

  let cart = useSelector((state) => state.cart);
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

  useEffect(() => {
    //mount, update시 코드 실행
    //HTML 랜더링이 다 되고나서 실행.
    //어려운 연산. 서버에서 데이터 가져오는 작업. 타이머 장착
    //side effect 코드 보관함.

    let a = setTimeout(() => {
      setFade("end");
    }, 10);

    //2초 후에 실행됨
    let timer = setTimeout(() => {
      set할인(false);
    }, 2000);

    let 최근본상품 = JSON.parse(localStorage.getItem("watched"));
    //console.log(최근본상품);
    최근본상품.push(id);
    const set = new Set(최근본상품);
    console.log(최근본상품);
    localStorage.setItem("watched", JSON.stringify(Array.from(set)));

    return () => {
      //기존 타이머는 제거해주세요. cleanup function 기존 코드 치우는 거 작성.
      clearTimeout(timer); //타이머 제거해주는 함수.
      clearTimeout(a); //타이머 제거해주는 함수.
    }; //useEffect동작 전에 실행되는 return()=>{}
  }, []); //count라는 state가 변할 때만 실행됨 - []는 해당 컴포넌트가 mount될 때 1회, 아무것도 없을 때는 mount, update될 때

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지 마세요");
    }
  }, [num]);

  return (
    <div className={`container start ${fade} `}>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {count}
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>

      {할인 == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (parseInt(id) + parseInt(1)) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        {경고 == true ? (
          <div className="alert alert-danger">그러지 마세요!!</div>
        ) : null}

        {/* <input
          onChange={(e) => {
            setNum(e.target.value);
          }}
        /> */}

        <input
          onChange={(e) => {
            let input = e.target.value;
            if (!numeric.test(input) && input) {
              console.log("숫자 아님!");
              경고변경(true);
            } else {
              경고변경(false);
            }
          }}
        />
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.name}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              //console.log("찾은 상품" + JSON.stringify({ 찾은상품 }));
              //dispatch(order({ 찾은상품 }.찾은상품));
              dispatch(order({ id: id, name: props.shoes[id].name, count: 1 }));
              console.log(state.cart);
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      {재고}
      <Nav variant="tabs" defaultActiveKey="link1">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  let { 재고, shoes } = useContext(Context1);
  useEffect(() => {
    //end를 부착해주세요
    //fade state를 end로 바꿔주세요
    let a = setTimeout(() => {
      setFade("end");
    }, 10);

    return () => {
      clearTimeout(a);
      setFade("");
    };

    //state 변경 함수 근처 꺼를 한 번에 실행함. - automatic batching
  }, [tab]); // 탭이라는 게 변할 때마다 안의 코드 실행함

  return (
    <div className={`start ${fade}`}>
      {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
