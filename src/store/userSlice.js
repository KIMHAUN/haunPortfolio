import { createSlice } from "@reduxjs/toolkit";

//useState역할
let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    setName(state) {
      //return { name: "park", age: 20 };
      state.name = "park";
    },
    setAge(state, action) {
      state.age += action.payload;
    },
  },
});
//distructureing
export let { setName, setAge } = user.actions;

export default user;
