import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { value, decroment, incrument, reset  } from "./reducer/countSlice";

function App() {

  const [message, setMessage] = useState('');

  const count = useSelector((state) => state.reducer.count)
  const dispatch = useDispatch()
  console.log(message + +message);
  console.log(dispatch);

  // useEffect(()=>{
  //   setMessage('')
  // },[])
 
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={5}>
            <h1 className="count">count :<p className="value">{count }</p> </h1>
            <input className="input" onChange={(e) =>setMessage(e.target.value) } placeholder="son" />
          <div className="both">
            <button className="count_btn" onClick={() => dispatch(decroment())}>decroment</button>
            <button className="count_btn" onClick={() => dispatch(incrument())}>incroment</button>
          </div>
            <button className="count_1" onClick={() => dispatch(reset())}>reset</button>
            <button className="count_1" onClick={() => dispatch(value( Number(+message)))}>Add Async</button>
          </Col>
        </Row>
      </Container>

    </>
  );
}
export default App;
