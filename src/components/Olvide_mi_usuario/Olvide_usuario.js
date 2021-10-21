import React from 'react'
import Form from 'react-bootstrap/Form'
import './Olvide_usuario.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Footer from '../Footer/Footer'

const Olvide_contraseña = () => {

    return (
        <div>
        <div className="BoddyRecuperar">
            
            <div className="Texto">
                <h4>Recuperar mi usuario</h4>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ingrese_identificacion">Ingrese su documento de identidad</Form.Label>
            <div className="cajaTexto"><Form.Control type="email" placeholder=""/></div>
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>

            <Container>
                <Row>
                    <Col>
            <p className="hipervinculOlvido1">
            <a href="/Recuperacion_usuario">Recuperar usuario</a>
            </p>
            </Col>
            <Col>
            <p className="hipervinculOlvido2">
            <a href="/Ingresar">Regresar</a>
            </p>
                    </Col>
                </Row>
            </Container>
            <br></br>

        </div>     

        <Footer />
        
        </div>
    )
}

export default Olvide_contraseña