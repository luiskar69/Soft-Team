import React from "react";
import Logo_taller from '../logo-taller.png';
import Form from "react-bootstrap/Form";
import "./Olvide_contraseña.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../Footer/Footer";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const Olvide_contraseña = () => {

  let History = useHistory();

  return (
    <div>
      <Container className="container_olvide_contraseña">
        <Col class="col-md-4 col-md-offset-4">
          <center>
            <img src={Logo_taller} />
            <h3> Recuperar Contraseña</h3>
          </center>
          <Form>
            <Form.Group>
              <Form.Label>
                Ingresa tu correo electrónico para buscar tu cuenta
              </Form.Label>
              <Form.Control
                className="ingresa_correo_recuperar_contraseña"
                type="email"
                placeholder="Ingresa tu correo"
              />
            </Form.Group>
          </Form>
          <Row>
            <div className="botones">
              <Button
                className="btn_cancelar_recuperar_contraseña"
                variant="outline-secondary"
                onClick={() => History.push("/Pagina_login")}
              >
                Cancelar
              </Button>
              <Button
                className="btn_buscar_recuperar_contraseña"
                variant="outline-secondary"
                type="submit"
              >
                Buscar
              </Button>
            </div>
          </Row>
        </Col>
      </Container>

      <Footer />
    </div>
  );
};

export default Olvide_contraseña;
