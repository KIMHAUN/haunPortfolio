import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAge } from "./../store/userSlice";
import { setStock, deleteItem } from "./../store";
import { useState, memo, useMemo, useTransition } from "react";

//memo : 꼭 필요할 때만 재랜더링함.- 특정 상황 : 전달하는 props가 변할 때만
//무거운 컴포넌트. 대부분 안씀
let Child = memo(function () {
  console.log("재랜더링");
  return <div>자식임</div>;
});

function 함수() {
  //
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
      <Child count={count}></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h6>
        {state.user.name}({state.user.age})의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(setAge(100));
        }}
      >
        노화 버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((a, i) => (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(setStock(a.id));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteItem(a));
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
