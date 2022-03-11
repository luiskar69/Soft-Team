import React from 'react'
import {
  Navbar,
  Dropdown,
  Form,
  Container,
} from "react-bootstrap";
import Logo from "./taller.png";
import "./Style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Config from "./Admin.jpg";
import Image from "react-bootstrap/Image";


const Navbar_admin = () => {
  return (
    <>
      <Navbar expand="lg" className="back">
        <Container fluid>
          <Navbar.Brand href="#">
            <Row>
              <Col lg="3" xs="4">
                <img
                  alt=""
                  src={Logo}
                  width="80"
                  height="80"
                  classN
                  ame="d-inline-block align-top"
                />
              </Col>
              <Col lg="9" xs="8" className="col1">
                <h1>Taller Agrícola</h1>
                <h5>El mejor en su clase</h5>
              </Col>
            </Row>
          </Navbar.Brand>
          <Form className="d-flex" >
            <h4 className="text-mec">Administrador</h4>
            <Dropdown className="drop">
              <Dropdown.Toggle variant="link" id="dropdown-basic">
              <Image src={Config} roundedCircle width="50" height="50" />
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item href="/Ajustes_admin">Ajustes</Dropdown.Item>
                <Dropdown.Item href="/">Salir</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbar_admin

