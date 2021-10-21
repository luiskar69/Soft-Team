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
                        <button className="btn_captura" onClick={() =>History.push('/Ingresar')}>Capturar info.</button>
                        <button className="btn_inv" onClick={() =>History.push('/Ingresar')}>Iventario</button>
                    </Col>
                    <Col sm={8}>
                        <Container className="contenedor">
                            <Row>
                                <Col>
                                <br></br>
                                <Table striped bordered hover size="sm">
                                    <tbody>
                                        {datadata.map(index => {
                                            return (
                                                <tr>
                                                    <td>{index.Maquinaria1}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                                <br></br>
                                </Col>
                                <Col>
                                <>
                                <br></br>
                                    <p>Observaciones:</p>
                                    <Form.Control size="sm" type="text" placeholder="" />
                                    <br></br>
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
