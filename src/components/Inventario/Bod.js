import React from 'react'
import { Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './stylebod.css'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useHistory } from 'react-router';
import Footer from '../Footer/Footer'


const Bod = () => {

  let History = useHistory();

    return (
      <Container>
  <Row>
    <Col xs lg="3">
    <button className="btn_captura" onClick={() =>History.push('/Captura_info')}>Capturar info.</button>
    <button className="btn_inv">Inventario</button>
    </Col>
    <Col xs lg="9">
      <Container >
        
      <Table className="conte" striped bordered hover size="sm">
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Retrovisor Int. y Ext.</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
      <td colSpan="2">Cuantas llaves
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select></td>
    </tr>
    <tr>
      <td>Lámpara y vidrios</td>
      <td>Buenos <Form.Check aria-label="option 1"/></td>
      <td>Malos <Form.Check aria-label="option 1"/></td>
      <td colSpan="1">Con llavero 
      Sí <Form.Check aria-label="option 1"/> </td>
      <td>No <Form.Check aria-label="option 1"/> </td>
     
    </tr>
    <tr>
      <td>Tapa tanque de combus.</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
      <td colSpan="2" rowSpan="8"> <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={17} />
  </Form.Group></td>
    </tr>
    <tr>
      <td>Tapa tanque hidráulico</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
    </tr>
    <tr>
      <td>Tapa radiador</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
     
    </tr>
    <tr>
      <td>Extintor</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
     
    </tr>
    <tr>
      <td>Llanta de repuesto</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
     
    </tr>
    <tr>
      <td>Radio musical</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
     
    </tr>
    <tr>
      <td>Radio telefono</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>

    </tr>
    <tr>
      <td>Gato y Palancas con llave</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
      
    </tr>
    <tr>
      <td>Parlantes</td>
      <td>Si <Form.Check aria-label="option 1"/></td>
      <td>No <Form.Check aria-label="option 1"/></td>
      <td colSpan="2">Cuántos<Form.Control size="sm" type="text" placeholder=""/></td>
      
    </tr>
    <tr>
      <td>Estado de vidrios</td>
      <td>Buenos <Form.Check aria-label="option 1"/></td>
      <td>Malos <Form.Check aria-label="option 1"/></td>
      <td colSpan="2">Cuántos<Form.Control size="sm" type="text" placeholder=""/></td>
      
    </tr>
    <tr>
      <td>Cojineria</td>
      <td>Buenos <Form.Check aria-label="option 1"/></td>
      <td>Malos <Form.Check aria-label="option 1"/></td>
      <td colSpan="2">Falta<Form.Control size="sm" type="text" placeholder=""/></td>
     
    </tr>
    <tr>
      <td>Estado de lámina y pint.</td>
      <td>Buenos <Form.Check aria-label="option 1"/></td>
      <td>Malos <Form.Check aria-label="option 1"/></td>
      <td colSpan="2">Regular<Form.Control size="sm" type="text" placeholder=""/></td>
      
    </tr>
    <tr>
      <td colSpan="6"> <FloatingLabel controlId="floatingTextarea2" label="Observación:">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel></td>
    </tr>
    <tr>
      <td colSpan="6"> <FloatingLabel controlId="floatingTextarea2" label="Golpes o Rayones:">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel></td>
    </tr>
    <tr>
      <td colSpan="6">
      <Row>
      <Col xs lg="4">
        <p>SALIDA DE LA MÁQUINA</p>
      </Col>
      <Col xs lg="4">

      </Col>
      <Col xs lg="4">
        <p>Código Material:</p>
      </Col>
      </Row>
      </td>
    </tr>
  </tbody>
</Table>
      </Container>
    </Col>

  </Row>
  </Container>

    )
}
export default Bod
