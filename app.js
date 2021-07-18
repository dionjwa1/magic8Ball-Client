'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

let dion = 'Hey Yo D!';
console.log(dion);

ReactDOM.render(
<Container fluid>
  <Row>
    <Col>This is the start of something great!</Col>
  </Row>
</Container>,

document.getElementById("root")
);