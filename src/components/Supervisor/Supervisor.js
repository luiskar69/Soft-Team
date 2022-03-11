import React from 'react'
import './Supervisor.css'
import Footer from '../Footer/Footer'
import Logo from "./taller.png";
import Supervisor_logo from './supervisor-logo.png'
import Image from "react-bootstrap/Image";
import { Col, Row, Table } from 'react-bootstrap';
import {
  Navbar,
  Dropdown,
  Form,
  Container,
} from "react-bootstrap";

const Supervisor = () => {
    
   /* let datadata = [
        {
          Maquinaria1: 'Cosechadora',
          daniel: 'daniel'
        }, {
          Maquinaria1: '9468',
          daniel: '15'
        },
        {
          Maquinaria1: '15465',
          daniel: 'casa 234234324324'
        },
        {
          Maquinaria1: '06/08/2021  14:45'
        },
        {
          Maquinaria1: '87051'
        },
        {
          Maquinaria1: 'Juan Bastidas'
        }
    
      ]*/

    return (
                <Row>
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
                    <Col lg="3">
                        <button className="btn_captura">Solicitud de ingreso.</button>
                    </Col>
                    <Col lg="8">
                        <Container className="contenedor">
                            <Row>
                                <Col>
                                <br></br>
                                <Table className="tab" striped bordered hover size="sm">
                                <thead>
                                    <tr>Tipo maquinaria:</tr>
                                    <tr>Número interno:</tr>
                                    <tr>Horómetro:</tr>
                                    <tr>Fecha/Hora ingreso:</tr>
                                    <tr>Tipo de mantenimiento:</tr></thead>
                                </Table>
                                <br></br>
                                </Col>
                                <Col>
                                <>
                                <br></br>
                                    <p>Observaciones:</p>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                      <Form.Control as="textarea" rows={3} />
                                      </Form.Group></>
                                </Col>
                            </Row>
                            <Row>
                            <Col>
                                 <button className="btn_aprobar">Aprobrar</button>
                                </Col>
                                <Col>
                                <>
                                  <button className="btn_rechazar">Rechazar</button>
                                </>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                <Footer />
                </Row>
    )
}

export default Supervisor
