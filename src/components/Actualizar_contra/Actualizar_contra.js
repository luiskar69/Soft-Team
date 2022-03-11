import React from 'react'
import './Actualizar_contra.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Foto from '../Ajustes_Body/MR.jpg';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Actualizar_contra = () => {
    return (
      <>
      <Navbar/>
        <Container className="containerAjustes">
          <Row className="row_Ajustes">
            <Col xs={4} md={3}>
              <center>
              <Image className="foto" src={Foto} roundedCircle
                width="120"
                height="120"
              />
              </center>
            </Col>
            <Col className="usuarioAjuste" xs={12} md={8}>
              <h5>Usuario: Mecánico Recepcionista</h5>
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

            <a className="regresarAjustes" href='/Ajustes'>Guardar</a>
          
          </Row>
        </Container>
        <Footer/>
        </>
    )
}

export default Actualizar_contra
