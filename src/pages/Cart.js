import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAge } from "./../store/userSlice";
import { setStock, deleteItem } from "./../store";
function Cart() {
  //redux store가져와줌
  let cart = useSelector((state) => state.cart);
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

  return (
    <div>
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
