import React from 'react'
import Container from 'react-bootstrap/Container'
import {
    Navbar,
    Dropdown,
    Button
  } from "react-bootstrap";
import Logo from './taller.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Supervisor_logo from './supervisor-logo.png'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router';

const Ajustes_super = () => {

    
  let History = useHistory();

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
            <h4 className="text-mec">Supervisor</h4>
            <Dropdown className="drop">
              <Dropdown.Toggle variant="link" id="dropdown-basic">
              <Image src={Supervisor_logo} roundedCircle width="50" height="50" />
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item href="/Ajustes_super">Ajustes</Dropdown.Item>
                <Dropdown.Item href="/">Salir</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Container>
      </Navbar>
        <Container className="containerAjustes">
      <Row className="row_Ajustes">
        <Col xs={4} md={3}>
          <center>
          <Image className="foto" src={Supervisor_logo} roundedCircle
            width="120"
            height="120"
          />
          </center>
        </Col>
        <Col className="usuarioAjuste" xs={12} md={8}>
          <h5>Usuario: Supervisor</h5>
        </Col>
      </Row>
      <Row>
      <hr className="separador"/>
        <Col>
        <Button className="btnAjustes" variant="outline-secondary" onClick={() =>History.push('/Actualizar_contraseña_supervisor')}>ACTUALIZAR CONTRASEÑA</Button>
        </Col>

        <a className="regresarAjustes" href='/Supervisor'>Regresar</a>
      </Row>
    </Container>
    </>
  )
}

export default Ajustes_super