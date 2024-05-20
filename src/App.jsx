import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BookLists from "./components/BookList";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <AddBook />
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <BookLists></BookLists>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
