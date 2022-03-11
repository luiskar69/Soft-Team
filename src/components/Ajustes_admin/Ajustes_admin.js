import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Foto from './Admin.jpg';
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar_admin from '../Navbar_admin/Navbar_admin'

const Ajustes_admin = () => {

    let History = useHistory();
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
        <button className="btnAjustes" onClick={() =>History.push('/Actualizar_contraseña_admin')}>ACTUALIZAR CONTRASEÑA</button>
        </Col>

        <a className="regresarAjustes" href='/Administrador'>Regresar</a>
      </Row>
    </Container>  
    <Footer/>
        </>
    )
}

export default Ajustes_admin
