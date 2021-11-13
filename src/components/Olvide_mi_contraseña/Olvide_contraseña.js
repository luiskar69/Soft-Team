import React from 'react'
import Form from 'react-bootstrap/Form'
import './Olvide_contraseña.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Footer from '../Footer/Footer'

const Olvide_contraseña = () => {

    return (
        <div>
        <div className="BoddyRecuperarContraseña">
            
            <div className="Texto">
                <br></br>
                <h4>Recuperar mi contraseña</h4>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ingrese_usuario">Ingrese su usuario</Form.Label>
            <div className="cajaTexto"><Form.Control type="email" placeholder=""/></div>
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>

            <Container>
                <Row>
                    <br></br>
                    <Col>
            <p className="hipervinculOlvido1">
            <a href="/Recuperacion_contraseña">Recuperar contraseña</a>
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