import React from 'react'
import Captura_boddy from '../Captura_boddy/Captura_boddy'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import '../Pagina_login/login.css'

const Captura_info = () => {
      
    return (

        <div className='captura-view'>
            <Navbar />
            <Captura_boddy/>
            <Footer/>
        </div>
        
    )
}

export default Captura_info
