import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar_admin from '../Navbar_admin/Navbar_admin'
import './Registro_maquina_Style.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Cosechadora from './Cosechadora.jpeg'
import Tractor from './Tractor.jpg'
import Alzadora from './Alzadora.jpg'
import Campero from './Campero.jpg'
import Camion from './Camion.jpg'
import Tractocamion from './Tractocamion.jpg'
import Motocicleta from './Motocicleta.png'

const Registro_maquina = () => {
  return (
    <>
      <Navbar_admin/>
      <center>
        <h1 className='titulo_registro_maquinaria'>
          Selecciona el tipo de máquina que va a registrar
        </h1>
        <Container>
          <Row>
            <Col>
              <img
                  src={Cosechadora}
                  width="150px"
                  height="150px"
              />
              <button className="btn_añadir_cosechadora" onClick={() =>History.push('/Registro_usuario')}>Cosechadora</button>
            </Col>
            <Col>
            <img
                  src={Tractor}
                  width="150px"
                  height="150px"
            />
              <button className="btn_añadir_tractor" onClick={() =>History.push('/Registro_usuario')}>Tractor</button>
            </Col>
            <Col>
            <img
                  src={Alzadora}
                  width="150px"
                  height="150px"
            />
              <button className="btn_añadir_cosechadora" onClick={() =>History.push('/Captura_info')}>Alzadora</button>
            </Col>
            <Col>
            <img
                  src={Campero}
                  width="150px"
                  height="150px"
            />
              <button className="btn_añadir_tractor" onClick={() =>History.push('/Captura_info')}>Tractocamión</button>
            </Col>
            <Col>
            <img
                  src={Camion}
                  width="150px"
                  height="150px"
            />
              <button className="btn_añadir_cosechadora" onClick={() =>History.push('/Registro_maquina')}>Camión</button>
            </Col>
            <Col>
            <img
                  src={Tractocamion}
                  width="150px"
                  height="150px"
            />
             <button className="btn_añadir_tractor" onClick={() =>History.push('/Captura_info')}>Campero</button>
            </Col>
            <Col>
            <img
                  src={Motocicleta}
                  width="150px"
                  height="150px"
            />
              <button className="btn_añadir_cosechadora" onClick={() =>History.push('/Registro_maquina')}>Motocicleta</button>
            </Col>
          </Row>
        </Container>
      </center>
    </>
  )
}

export default Registro_maquina