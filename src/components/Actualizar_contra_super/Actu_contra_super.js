import React from 'react'
import Container from 'react-bootstrap/Container'
import {
    Navbar,
    Dropdown
  } from "react-bootstrap";
import Logo from './taller.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Supervisor_logo from './supervisor-logo.png'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

const Actu_contra_super = () => {
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
                <Dropdown.Item href="/Ajustes_">Ajustes</Dropdown.Item>
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
<h5 className="h5">ACTUALIZAR CONTRASEÑA</h5>

<Container>
<Row>
  <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña actual:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  </Col>
  <Col>

  </Col>
</Row>
</Container>

<Container>
<Row>
  <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nueva contraseña:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirmar contraseña:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  </Col>
</Row>
</Container>              
</Col>

<a className="regresarAjustes" href='/Ajustes_super'>Guardar</a>

</Row>
</Container>
</>
  )
}

export default Actu_contra_super