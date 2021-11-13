import React from 'react'
import Form from 'react-bootstrap/Form'
import './Recuperacion_contraseña.css'
import Footer from '../Footer/Footer'

const Olvide_contraseña = () => {

    return (
        <div>
        <div className="BoddyRecuperarContraseña">
            
            <div className="Texto">
                <br></br>
                <h4>Recuperar mi contraseña</h4>
            </div>
            <Form.Label className="seraEnviadaContraseña">Su contraseña sera enviada a:</Form.Label>
            <div className="textoRecuperacion">
            <p>*******ario@gmail.com</p>
            </div>
            
            <p className="regresarRecuperacion">
            <a href="/Ingresar">Regresar</a>
            </p>
            <br></br>

        </div>     

        <Footer />
        
        </div>
    )
}

export default Olvide_contraseña