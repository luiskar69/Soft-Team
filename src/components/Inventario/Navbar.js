import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import Logo from './taller.png'
import './Style.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Mec from './8_122645.png'


const Inventario = () => {
  return (
    <Navbar bg="dark" variant="dark" className='col1'>
      <Row className="alinear">
        <Col lg="7">
          <Row >
            <Col lg="2">
              <img
                alt=""
                src={Logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
              />{''}
            </Col>
            <Col lg="6" >
              <h1>Taller Agrícola</h1>
              <h5>El mejor en su clase</h5>
            </Col>
          <Col lg="4" className="text-mec">
          <h1>Mecánico Recepcionista</h1>
          <img
                alt=""
                src={Mec}
                width="80"
                height="80"
                className="w-10 d-inline-block align-top"
              />{''}
        </Col>
          </Row>
        </Col>
      </Row>
    </Navbar>
  )
}

export default Inventario
