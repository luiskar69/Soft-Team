import React from 'react'
import Form from 'react-bootstrap/Form'
import './Recuperacion_usuario.css'
import Footer from '../Footer/Footer'

const Recuperacion_contraseña = () => {

    return (
        <div>
        <div className="BoddyRecuperar">
            
            <div className="Texto">
                <h4>Recuperar mi usuario</h4>
            </div>
            <Form.Label className="ingrese_identificacion">Su usuario sera enviado a:</Form.Label>
            <div className="textoRecuperacion">
            <p>*******ario@gmail.com</p>
            </div>
            
            <div className="regresarRecuperacion">
            <p>
            <a href="/Ingresar">Regresar</a>
            </p>
            </div>
            <br></br>
            </div>

            <Footer />
        
        </div>
    )
}

export default Recuperacion_contraseña