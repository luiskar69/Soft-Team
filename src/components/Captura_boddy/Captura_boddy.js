import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import './Captura_boddy.css'
import Form from 'react-bootstrap/Form'

const Captura_boddy = () => {

    
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
            <Container className="Boddy_captura">
                <Row>
                    <Col sm={4}>
                        <button className="btn_captura" onClick={() =>History.push('/Captura_info')}>Capturar info.</button>
                        <button className="btn_inv" onClick={() =>History.push('/Ingresar')}>Inventario</button>
                    </Col>
                    <Col sm={8}>
                        <Container className="contenedor">
                            <Row>
                                <Col>
                                <br></br>
                                <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>Tipo maquinaria:</tr>
                                    <tr>Número interno:</tr>
                                    <tr>Horómetro:</tr>
                                    <tr>Fecha/Hora ingreso:</tr>
                                    <>
                                      <Form.Select className="menu-desplegable">
                                        <option>Tipo de mantenimiento:</option>
                                        <option value="1">Preventivo</option>
                                        <option value="2">Predictivo</option>
                                        <option value="3">Correctivo</option>
                                        <option value="4">Proactivo</option>
                                      </Form.Select>
                                      <Form.Select className="menu-desplegable">
                                        <option>Secciones que ingresa:</option>
                                        <option value="1">Diesel</option>
                                        <option value="2">Automotriz</option>
                                        <option value="3">Lámina y pintura</option>
                                        <option value="4">Eléctricos</option>
                                        <option value="5">Soldadura</option>
                                        <option value="6">Mecánicos campo</option>
                                        <option value="7">Torno</option>
                                        <option value="8">Serviteca</option>
                                        <option value="9">Montallantas</option>
                                      </Form.Select>
                                    </>
                                    <tr>Ficha operador:
                                    </tr>
                                    <tr>Nombre operador:</tr>
                                </thead>
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
                                      </Form.Group>
                                    <button className="btn_solicitud" onClick={() =>History.push('/Ingresar')}>Solicitar aprobación ingreso</button>
                                    <button className="btn_genCorreo" onClick={() =>History.push('/Ingresar')}>Generar correo</button>
                                </>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
    )
}

export default Captura_boddy
