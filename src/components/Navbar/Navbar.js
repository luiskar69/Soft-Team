import React from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from './taller.png'
import './Style.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Config from './MR.jpg'
import Image from 'react-bootstrap/Image'


const Inventario = () => {
  return (
    <Navbar bg="dark" variant="dark" className='col1'>
      <Row className="alinear">
            <Col lg="1">
              <img
                alt=""
                src={Logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
              />{''}
            </Col>
            <Col lg="6">
              <h1>Taller Agrícola</h1>
              <h5>El mejor en su clase</h5>
            </Col>
          <Col lg="5" className="text-mec">
          <h1>Mecánico Recepcionista</h1>
           < Image src={Config} roundedCircle
              width="90"
              height="90"
           />
          </Col>
      </Row>
    </Navbar>
  )
}

export default Inventario
