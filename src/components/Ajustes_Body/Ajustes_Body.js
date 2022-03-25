import React from 'react'
import './Ajustes_Body.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Foto from './MR.jpg';
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router';

const Ajustes_Body = () => {

  let History = useHistory();
  
  return (
    
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
        <button className="btnAjustes" onClick={() =>History.push('/Actualizar_contraseña_mec')}>ACTUALIZAR CONTRASEÑA</button>
        </Col>

        <a className="regresarAjustes" href='/Mecanico_recepcionista'>Regresar</a>
      </Row>
    </Container>
    )
}

export default Ajustes_Body
