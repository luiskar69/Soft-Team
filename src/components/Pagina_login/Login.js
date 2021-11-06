import React from 'react'
import './login.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Logo_taller from '../logo-taller.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';
import Footer from '../Footer/Footer'

const Login = () => {

  let History = useHistory();

    return (
      <div>
      <div className="Boddy">
        <Container>
        <Row className="boddyRows">
          <Col className="columnas">
          <center>
          <img className="logo_taller" src = {Logo_taller}
          />
          </center>
          </Col>
          <Col className="columnas">
          <h4 className="titulo">Ingresar</h4>
          <Form className="Formulario">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type="email" placeholder="Ingrese su usuario" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Ingrese su contraseña" />
  </Form.Group>
  <div className="botones">
  <Button className="boton2" variant="outline-secondary" onClick={() =>History.push('/Pagina_principal')}>
    Regresar
  </Button>
  <Button className="boton1" variant="outline-secondary" type="submit" onClick={() =>History.push('/Captura_info')}>
    Ingresar
  </Button>
  </div>
  <div className="hipervinculos">
  <p>
  <a href="Olvide_mi_usuario">Olvide mi usuario</a>.
  </p>
  <p>
  <a href="/Olvide_mi_contraseña">Olvide mi contraseña</a>.
  </p>
  </div>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recordarme" />
  </Form.Group>
  
</Form>
          </Col>
        </Row>
        </Container>
      
        </div>
        <Footer />
        </div>
    )
}

export default Login
