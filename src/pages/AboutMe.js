import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAge } from "../store/userSlice";
import { setStock, deleteItem } from "../store";
import { useState, memo, useMemo, useTransition } from "react";
import profile from "../img/circledprofile.png";

const introduceMsg = `
Hello, My name is Haeun Kim.

I worked as a web developer for 4 years using java, react

I made some application by kotlin and flutter personally.

I prefer frontend development because I enjoy creating pretty interface.


I'm a Computer science graduate with a strong passion to work in the develop industry.
I worked as a web developer for 4 years.
My skills include knowledge of programming languages and good communication.
I think completing my duties thoroughly first is the starting point of all success.
I am a optimistic person who believes that every problem has its solution.
I would describe myself as a person of action because I do what I say I will.
`

function AboutMe() {
  //redux store가져와줌
  let cart = useSelector((state) => state.cart);
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); //store.js로 요청 보내주는 함수
  let [count, setCount] = useState(0);
 

  return (
    <div>
      
     
      <div class="content">
       
        <br/>
        Bachelor of  <span class="boldText">Computer Science</span> 
        
 
        <h3>
           
        </h3>
       
      </div>
    </div>
  );
}

export default AboutMe;
