import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decroment, incrument, reset, value } from "./reducer/countSlice";

function App() {
  // const [message, setMessage] = useState('');
// console.log(message);
  const count = useSelector((state) => state.reducer.count)


  console.log(count);
  const dispatch = useDispatch()

 
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={5}>

            <h1 className="count">count :<p className="value">{count}</p> </h1>
            <input className="input" onClick={() => dispatch(value())} placeholder="son" />
          <div className="both">
            <button className="count_btn" onClick={() => dispatch(decroment())}>decroment</button>
            <button className="count_btn" onClick={() => dispatch(incrument())}>incroment</button>
          </div>
            <button className="count_1" onClick={() => dispatch(reset())}>reset</button>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
