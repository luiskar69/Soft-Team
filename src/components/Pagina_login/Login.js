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
import { useState } from 'react'

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  let History = useHistory();

  return (
    <div className='gran'>
      <Container className="boddy">
          <Row>
            <Col lg='5' className="logo_taller">
              <center>
                <img src={Logo_taller}
                />
              </center>
            </Col>
            <Col lg='5' className='col_login'>
              <h4 className='titulo_login'>Ingresar</h4>
              <Form className="Formulario" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control className='ingresar_usuario' type="text" placeholder="Ingrese su usuario" maxLength="15" required />
                  <Form.Control.Feedback>Datos validos</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese un usuario válido
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control className='ingresar_usuario' type="password" placeholder="Ingrese su contraseña" maxLength="8" required  />
                  <Form.Control.Feedback>Datos validos</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese una contraseña
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="botones">
                  <Button className="boton2" variant="outline-secondary" onClick={() => History.push('/Pagina_principal')}>
                    Regresar
                  </Button>
                  <Button className="boton1" variant="outline-secondary" type="submit">
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
                  <Form.Check type="checkbox" label="Recordarme"/>
                </Form.Group>

              </Form>
            </Col>
          </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default FormExample;