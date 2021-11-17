import Logo from './Logo-SOFT-TEAM.png';
import './inicio.css';
import { useHistory } from 'react-router';
import Footer from '../Footer/Footer'

const Index = () => {

  let History = useHistory();
    return (
      <div className="body">
        <div >
                  
          <center>
            <img className="Logo" src= {Logo}
            />
           <button className="boton" onClick={() =>History.push('/Pagina_login')}>INGRESAR</button>
          </center>
                
        </div>

        <div>
          <Footer />
        </div>

      </div>   
  );
}

export default Index;
