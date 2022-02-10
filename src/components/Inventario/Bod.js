import React from 'react'
import { Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './stylebod.css'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useHistory } from 'react-router';


const Bod = () => {

  let History = useHistory();

    return (
  <Row>
    <Col xs lg="3">
    <button className="btn_captura" onClick={() =>History.push('/Captura_info')}>Capturar info.</button>
    <button className="btn_inv">Inventario</button>
    </Col>
    <Col xs lg="9">
      <Container className="conte">
        
      <Table striped bordered hover size="sm" className="tabla" responsive  >
  <thead>
    <tr>
      <th colSpan="7" className='primer'><h3>INVENTARIO GENERAL - Recepcionista Taller Agricola</h3></th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th colSpan="1">Revisión de elementos</th>
      <th colSpan="2">Dar click sobre el item</th>
      <th colSpan="2">Elementos Personales</th>
      <th colSpan="2">Novedades o Fallas presentes en la máquina</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Retrovisor Int. y Ext.</td>
      <td> <Form.Check label="Sí" aria-label="option 1"/></td>
      <td> <Form.Check label="No" aria-label="option 1"/></td>
      <td colSpan="2">
        <Row>
          <Col xs lg="5">
          ¿Cuántas llaves?
          </Col>
          <Col xs lg="7">
          <Form.Control type="number" placeholder="" />
          </Col>
        </Row>
        </td>
            <td colSpan="2" rowSpan="14">
    <Form.Control as="textarea" rows={19} /></td>
    </tr>
    <tr>
      <td height="35px">Lámpara y vidrios</td>
      <td><Form.Check label="Buenos" aria-label="option 1" /></td>
      <td><Form.Check label="Malos" aria-label="option 1"/></td>
      <td colSpan="1" > <Row> <Col xs lg="5">¿Con llavero?</Col> <Col xs lg="2"> <Form.Check label="Sí" aria-label="option 1"/> </Col> <Col xs lg="1"> <Form.Check label="No" aria-label="option 1"/> </Col> </Row></td>
     
    </tr>
    <tr>
      <td height="35px">Tapa tanque de combus.</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>
      <td colSpan="2" rowSpan="8">
    <Form.Control as="textarea"
      placeholder="Otros elementos a reportar"
       rows={10} /></td>
    </tr>
    <tr>
      <td height="35px">Tapa tanque hidráulico</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>
    </tr>
    <tr>
      <td height="35px">Tapa radiador</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>
     
    </tr>
    <tr>
      <td height="35px">Extintor</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>
     
    </tr>
    <tr>
      <td height="35px">Llanta de repuesto</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>
     
    </tr>
    <tr>
      <td height="35px">Radio musical</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>
     
    </tr>
    <tr>
      <td height="35px">Radio telefono</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>

    </tr>
    <tr>
      <td height="35px">Gato y Palancas con llave</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>
      
    </tr>
    <tr>
      <td height="35px">Parlantes</td>
      <td><Form.Check label="Sí" aria-label="option 1"/></td>
      <td><Form.Check label="No" aria-label="option 1"/></td>
      <td colSpan="2"> <Row> <Col xs lg="2"> Cuántos </Col> <Col xs lg="10"><Form.Control size="sm" type="text" className="uss" placeholder=""/> </Col> </Row></td>
      
    </tr>
    <tr>
      <td height="35px">Estado de vidrios</td>
      <td><Form.Check label="Buenos" aria-label="option 1"/></td>
      <td><Form.Check label="Malos" aria-label="option 1"/></td>
      <td colSpan="2"><Row> <Col xs lg="2"> Cuántos </Col> <Col xs lg="10"><Form.Control size="sm" type="text" className="uss" placeholder=""/> </Col> </Row></td>
      
    </tr>
    <tr>
      <td height="35px">Cojineria</td>
      <td><Form.Check label="Buenos" aria-label="option 1"/></td>
      <td><Form.Check label="Malos" aria-label="option 1"/></td>
      <td colSpan="2"><Row> <Col xs lg="2"> Falta </Col> <Col xs lg="10"><Form.Control size="sm" type="text" className="uss" placeholder=""/> </Col> </Row></td>
     
    </tr>
    <tr>
      <td height="35px">Estado de lámina y pint.</td>
      <td><Form.Check label="Buenos" aria-label="option 1"/></td>
      <td><Form.Check label="Malos" aria-label="option 1"/></td>
      <td colSpan="2"><Row> <Col xs lg="2"> Regular </Col> <Col xs lg="10"><Form.Control size="sm" type="text" className="uss" placeholder=""/> </Col> </Row></td>
      
    </tr>
    <tr>
      <td colSpan="6"> 
    <FloatingLabel controlId="floatingTextarea2" label="Golpes o Rayones:">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '70px' }}
    />
  </FloatingLabel></td>
    </tr>
    <tr>
      <td colSpan="6">
      <Row>
      <Row>
      <Col xs lg="5">
        <p>SALIDA DE LA MÁQUINA</p>
      </Col>
      <Col >
      </Col>
      <Col xs lg="6">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Código material
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>
      </Col>
      </Row>
      <td className="firmas">
        <Row>
        <Col xs lg="4" >
        <Form.Control type="text" placeholder="" className="margen" />
        <Form.Label column sm="6">
        <p>Operador recibe máquina</p>
        </Form.Label>
        </Col>
        <Col xs lg="4">
        <Form.Control type="text" placeholder="" className="margen" />
        <Form.Label column sm="14">
        <p>Entrega de máquina: Recepcionista / Supervisor</p>
        </Form.Label>
        </Col>
        <Col xs lg="4">
        <Form.Control type="text" placeholder="" className="margen" />
        <Form.Label column sm="7">
          <p>Vigilancia taller agricola</p>
        </Form.Label>
        </Col>
        </Row>
      </td>
      </Row>
      </td>
    </tr>
  </tbody>
</Table>
      </Container>
    </Col>

  </Row>
  
    )
    
}
export default Bod
