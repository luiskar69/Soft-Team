import React from "react";
import Form from "react-bootstrap/Form";
import "./Olvide_usuario_style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo_taller from "../logo-taller.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router";

const Olvide_usuario = () => {
  let History = useHistory();

  return (
    <>
      <Container className="container_olvide_usuario">
        <Col class="col-md-4 col-md-offset-4">
          <center>
            <img src={Logo_taller} />
            <h3> Recuperar Usuario</h3>
          </center>
          <Form>
            <Form.Group>
              <Form.Label>
                Ingresa tu correo electrónico para buscar tu usuario
              </Form.Label>
              <Form.Control
                className="ingresa_correo_recuperar_usuario"
                type="email"
                placeholder="Ingresa tu correo"
              />
            </Form.Group>
          </Form>
          <Row>
            <div className="botones">
              <Button
                className="btn_cancelar_recuperar_usuario"
                variant="outline-secondary"
                onClick={() => History.push("/Pagina_login")}
              >
                Cancelar
              </Button>
              <Button
                className="btn_buscar_recuperar_usuario"
                variant="outline-secondary"
                type="submit"
              >
                Buscar
              </Button>
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Olvide_usuario;
