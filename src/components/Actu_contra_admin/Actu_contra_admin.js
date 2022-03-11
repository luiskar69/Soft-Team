import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Foto from './Admin.jpg';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Navbar_admin from '../Navbar_admin/Navbar_admin';

const Actu_contra_admin = () => {
    return (
        <>
        <Navbar_admin/>
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
              <h5>Usuario: Administrador</h5>
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

            <a className="regresarAjustes" href='/Ajustes_admin'>Guardar</a>
          
          </Row>
        </Container>
        </>
    )
}

export default Actu_contra_admin
