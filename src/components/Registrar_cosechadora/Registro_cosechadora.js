import React from 'react';
import "./Registro_maquina_Style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Logo_taller from "../logo-taller.png";
import Maquinita from "./1230967.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const Registro_cosechadora = () => {

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
                <img
                  className="Maquinita"
                  src={Maquinita}
                  width="150px"
                  height="150px"
                />
                <div className="botones_registro">
                  <Button
                    className="btn_registrar"
                    variant="outline-secondary"
                    onClick={() => History.push("/Pagina_principal")}
                  >
                    Registrar
                  </Button>
                  <Button
                    className="btn_regresar2"
                    variant="outline-secondary"
                    onClick={() => History.push("/Administrador")}
                  >
                    Regresar
                  </Button>
                </div>
              </center>
            </Col>
            <Col lg="7">
              <h4 className="titulo">Registrar nueva Máquina</h4>
              <Form className="Formulario" responsive>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre Máquina</Form.Label>
                  <Form.Select className="prueba" placeholder="Elija el rol">
                    <option value="1">Cosechadora</option>
                    <option value="2">Tractor</option>
                    <option value="3">Alzadora</option>
                    <option value="4">Tractocamión</option>
                    <option value="5">Camión</option>
                    <option value="6">Campero</option>
                    <option value="7">Motocicleta</option>
                  </Form.Select>
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Referencia</Form.Label>
                  <Form.Control
                    maxLength="15" 
                    className="prueba"
                    type="text"
                    placeholder="Ingrese su apellido"
                  />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Serie</Form.Label>
                  <Form.Control
                    maxLength="15" 
                    className="prueba"
                    type="text"
                    placeholder="Ingrese su correo electrónico"
                  />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Ubicación técnica</Form.Label>
                  <Form.Select className="prueba" placeholder="Elija el rol">
                    <option value="1">Campo</option>
                    <option value="3">Cosecha</option>
                    <option value="4">Fábrica</option>
                    <option value="4">Servicios Generales</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Marca</Form.Label>
                  <Form.Select className="prueba" placeholder="Elija el rol">
                    <option value="1">Case</option>
                    <option value="2">JohnDeere</option>
                    <option value="3">Kenworth</option>
                    <option value="4">Paystar</option>
                    <option value="5">Chevrolet</option>
                    <option value="6">Toyota</option>
                    <option value="7">Suzuki</option>
                    <option value="8">Yamaha</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Modelo</Form.Label>
                  <Form.Select className="prueba" placeholder="Elija el rol">
                    <option value="1">Austoft</option>
                    <option value="2">Puma</option>
                    <option value="4">Paystar</option>
                    <option value="5">Chevrolet</option>
                    <option value="6">Toyota</option>
                    <option value="7">Suzuki</option>
                    <option value="8">Yamaha</option>
                    <option value="1">Case</option>
                    <option value="2">JohnDeere</option>
                    <option value="3">Kenworth</option>
                    <option value="4">Paystar</option>
                    <option value="5">Chevrolet</option>
                    <option value="6">Toyota</option>
                    <option value="7">Suzuki</option>
                    <option value="8">Yamaha</option>
                  </Form.Select>
                </Form.Group>
                <Col  lg="5">
              <center>
                <div className="botones_registro">
                  <Button
                    className="btn_registrar2"
                    variant="outline-secondary"
                    onClick={() => History.push("/Pagina_principal")}
                  >
                    Registrar
                  </Button>
                  <Button
                    className="btn_regresar"
                    variant="outline-secondary"
                    onClick={() => History.push("/Administrador")}
                  >
                    Regresar
                  </Button>
                </div>
              </center>
            </Col>
              </Form>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Registro_cosechadora