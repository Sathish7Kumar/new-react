import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { FaRegCopyright } from "react-icons/fa";

const Bmi = () => {
  const [value, setvalue] = useState("");
  const [weight, setweight] = useState("");
  const [result, setresult] = useState("");
  const [catagary, setcatagary] = useState("");

  function handlecalculate() {
    if (value > 0 && weight > 0) {
      let num1 = parseInt(weight);
      let num2 = parseFloat(value) / 100;
      let num3 = (num1 / (num2 * num2)).toFixed(2);

      setresult(`You BMI Value is : ${num3}`);
      if (num3 < 18.5) {
        setcatagary("Category is : underweight");
      } else if (num3 < 24.9) {
        setcatagary("Category is : Nornal Weight");
      } else if (num3 < 29.9) {
        setcatagary("Category is : Overweight");
      } else {
        setcatagary("Category is : Obesity");
      }
    } else {
      setresult(`Please Enter Valid Weight And Height`);
    }
  }
  function handlereset() {
    setvalue("");
    setweight("");
    setcatagary("");
    setresult("");
  }
  return (
    <>
      <Container fluid className="bmi">
        <Container className="bmii">
          <Container>
            <h1 className="text-center text-danger">BMI CALCULATOR</h1>
          </Container>

          <Container>
            <Form.Group
              as={Row}
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>HEIGHT</Form.Label>
              <Col sm="4">
                <Form.Control
                  type="number"
                  required
                  placeholder="Height in cm"
                  value={value}
                  onChange={(e) => setvalue(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Container>

          <Container>
            <Form.Group
              as={Row}
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label>WEIGHT</Form.Label>
              <Col sm="4">
                <Form.Control
                  type="number"
                  required
                  placeholder="weight in Kg"
                  value={weight}
                  onChange={(e) => setweight(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Container>

          <Container className="button-Container">
            <Button variant="success" onClick={handlecalculate}>
              CALCULATE
            </Button>
            <button className="mx-2 btn btn-danger" onClick={handlereset}>
              RESET
            </button>
          </Container>

          <br />

          <Container>
            <p className="text-center fs-2 fw-bold">{result}</p>
            <h5 className="p-3 fs-4 text-center text-danger "> {catagary}</h5>
            <p
              style={{ height: "50px" }}
              className="bg-dark text-light d-flex justify-content-center  align-items-center"
            >
              Developed by Jabaraj <FaRegCopyright style={{fontSize:"22px"}} className="mx-1 pt-1" color="red"  /> <span style={{fontSize:"18px"}}>2024</span>
            </p>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Bmi;
