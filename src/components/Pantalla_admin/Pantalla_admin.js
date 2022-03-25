import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar_admin from '../Navbar_admin/Navbar_admin'
import Table from 'react-bootstrap/Table'
import './Pantalla_admin_style.css'


const Pantalla_admin = () => {

    let History = useHistory(); 
    return (
        <>
        <Navbar_admin/>
            <Container >
                <Row>
                <Col lg='9'>
                    <button className="btn_añadir_usuario" onClick={() =>History.push('/Registro_usuario')}>Añadir usuario</button>
                    <button className="btn_editar_usuario" onClick={() =>History.push('/Registro_usuario')}>Editar usuario</button>
                    <button className="btn_añadir_usuario" onClick={() =>History.push('/Captura_info')}>Inhabilitar usuario</button>
                    <button className="btn_editar_usuario" onClick={() =>History.push('/Captura_info')}>Eliminar usuario</button>
                    <button className="btn_registrar_maquina" onClick={() =>History.push('/Registro_maquina')}>Añadir máquina</button>
                </Col>
                <Col lg='3' className='btn_search'>
                    <input className="search" placeholder="Buscar"/>
                </Col>
                </Row>
                <Table responsive bordered hover>
                <thead   className='cabecera2'>
                    <tr>
                    <th colSpan="10" className='primer'><h3>Usuarios registrados</h3></th>
                    </tr>
                </thead>
                    <thead className='cabecera'>
                        <tr>
                        <th></th>
                        <th>No. Ficha</th>
                        <th>Rol</th>
                        <th>Primer nombre</th>
                        <th>Segundo nombre</th>
                        <th>Primer apellido</th>
                        <th>Segundo apellido</th>
                        <th>Correo electrónico</th>
                        <th>Contraseña</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><input type='checkbox'></input></td>
                        <td>1006352079</td>
                        <td>Mecánico Recepcionista</td>
                        <td>Jeison</td>
                        <td>Steven</td>
                        <td>García</td>
                        <td>Robles</td>
                        <td>jeisonlex15@manuelitalomejor.com</td>
                        <td>kmnutrse543w54e657r67gub</td>
                        </tr>
                        <tr>
                        <td><input type='checkbox'></input></td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td><input type='checkbox'></input></td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        <Footer/>
        </>
    )
}

export default Pantalla_admin
