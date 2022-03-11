import React from "react";
import "./registro.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Logo_taller from "../logo-taller.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";


const Registro = () => {
  let History = useHistory();

  return (
    <div className="centrar_container">
      <Container className="Boddy">
        <Row >
          <Col className="col_logo_condiciones" lg="5">
            <center>
              <img
                className="logo_taller"
                src={Logo_taller}
                width="auto"
                height="auto"
              />
              <Row>
                <Col className="text_condiciones">
                <Form.Check required label="" aria-label="option 1" />
                  Al hacer clic, aceptas nuestras
                    la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que
                  puedes desactivar cuando quieras.
                </Col>
              </Row>
              <div>
                <Button
                  className="btn_registrar"
                  variant="outline-secondary"
                  onClick={() => History.push("/Pagina_principal")}
                >
                  Registrar
                </Button>
              </div>
            </center>
          </Col>
          <Col lg="7">
            <h4 className="titulo">Registrar nuevo usuario</h4>
            <Form className="Formulario" responsive>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  className="prueba"
                  type="text"
                  placeholder="Ingrese su nombre"
                />
                <Form.Text></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  className="prueba"
                  type="text"
                  placeholder="Ingrese su apellido"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  className="prueba"
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rol</Form.Label>
                <Form.Select className="prueba" placeholder="Elija el rol">
                  <option value="1">Mecánico recepcionista</option>
                  <option value="3">Supervisor</option>
                  <option value="4">Administrador</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tipo de documento de identidad</Form.Label>
                <Form.Select
                  className="prueba"
                  placeholder="Elija su tipo de documento"
                >
                  <option value="1">Cédula de ciudadania</option>
                  <option value="2">Tarjeta de identidad</option>
                  <option value="3">Cédula extranjera</option>
                  <option value="4">Pasaporte</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Número de documento de identidad</Form.Label>
                <Form.Control
                  className="prueba"
                  type="text"
                  placeholder="Sin puntos, ni comas"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nueva contraseña</Form.Label>
                <Form.Control
                  className="prueba"
                  type="password"
                  placeholder="Digite su contraseña"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  className="prueba"
                  type="password"
                  placeholder="Confirme su contraseña"
                />
              </Form.Group>
              <Col  lg="5">
            <center>
              <Row>
                <Col className="text_sin_logo">
                <Form.Check required label="" aria-label="option 1" />
                  Al hacer clic, aceptas nuestras
                    la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que
                  puedes desactivar cuando quieras.
                </Col>
              </Row>
              <div>
                <Button
                  className="btn_registrar2"
                  variant="outline-secondary"
                  onClick={() => History.push("/Pagina_principal")}
                >
                  Registrar
                </Button>
              </div>
            </center>
          </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registro;
