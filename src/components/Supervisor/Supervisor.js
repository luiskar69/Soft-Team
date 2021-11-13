import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useHistory } from 'react-router';
import './Supervisor.css'
import Form from 'react-bootstrap/Form'
import Footer from '../Footer/Footer'

const Supervisor = () => {

  let History = useHistory(); 
    
    let datadata = [
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
    
      ]

    return (
                <Row>
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
                                      <Form.Label>Example textarea</Form.Label>
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
