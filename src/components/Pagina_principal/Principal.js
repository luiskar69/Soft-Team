import Logo from './Logo-SOFT-TEAM.png';
import './inicio.css';
import { useHistory } from 'react-router';
import Footer from '../Footer/Footer'

const Index = () => {

  let History = useHistory();

        return (

    <div className="body">
    
      <center>
      <img className="Logo" src= {Logo}
      />
      <button className="boton" onClick={() =>History.push('/Ingresar')}>INGRESAR</button>
      </center>
          
      <Footer />

    </div>
  );
}

export default Index;
