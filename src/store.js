import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    //카트에서 + 클릭
    setStock(state, action) {
      //console.log(state.find((x) => x.id == action.payload));
      let stock = state.find((x) => x.id == action.payload);
      stock.count++;
    },
    order(state, action) {
      let num = state.findIndex((a) => {
        return a.id == action.payload.id;
      });
      console.log(num);
      //let stock = state.find((x) => x.id == action.payload.id);
      if (num == -1) {
        state.push(action.payload);
      } else {
        state[num].count++;
      }
    },
    deleteItem(state, action) {
      state.pop(action.payload);
    },
  },
});

//재고
let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export let { setStock, order, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
